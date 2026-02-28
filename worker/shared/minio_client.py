"""
MinIO Client for Worker Services
Handles file storage and retrieval for audio files, transcripts, and analysis results
"""

import os
import asyncio
from typing import Optional, BinaryIO, Dict, Any
from datetime import datetime, timedelta
from urllib.parse import urlparse
import boto3
from botocore.exceptions import ClientError, NoCredentialsError

class MinIOClient:
    """MinIO client wrapper for object storage operations"""
    
    def __init__(self, endpoint: str, access_key: str, secret_key: str, 
                 region: str = "us-east-1", secure: bool = False):
        self.endpoint = endpoint
        self.access_key = access_key
        self.secret_key = secret_key
        self.region = region
        self.secure = secure
        
        # Initialize S3 client (MinIO is S3-compatible)
        self.client = None
        self._connected = False
    
    async def connect(self) -> bool:
        """Initialize MinIO connection"""
        try:
            self.client = boto3.client(
                's3',
                endpoint_url=self.endpoint,
                aws_access_key_id=self.access_key,
                aws_secret_access_key=self.secret_key,
                region_name=self.region,
                use_ssl=self.secure
            )
            
            # Test connection
            await asyncio.get_event_loop().run_in_executor(
                None, self.client.list_buckets
            )
            
            self._connected = True
            return True
        except Exception as e:
            print(f"Failed to connect to MinIO: {e}")
            return False
    
    async def create_bucket(self, bucket_name: str) -> bool:
        """Create a new bucket if it doesn't exist"""
        if not self._connected:
            return False
        
        try:
            await asyncio.get_event_loop().run_in_executor(
                None, self.client.create_bucket, Bucket=bucket_name
            )
            return True
        except ClientError as e:
            if e.response['Error']['Code'] == 'BucketAlreadyExists':
                return True
            print(f"Failed to create bucket {bucket_name}: {e}")
            return False
    
    async def upload_file(self, bucket_name: str, object_key: str, 
                       file_data: BinaryIO, content_type: str = "application/octet-stream") -> str:
        """Upload file to MinIO and return object URL"""
        if not self._connected:
            raise Exception("Not connected to MinIO")
        
        try:
            # Ensure bucket exists
            await self.create_bucket(bucket_name)
            
            # Upload file
            await asyncio.get_event_loop().run_in_executor(
                None, 
                self.client.upload_fileobj,
                file_data,
                bucket_name,
                object_key,
                ExtraArgs={'ContentType': content_type}
            )
            
            # Generate URL
            return self._generate_object_url(bucket_name, object_key)
            
        except Exception as e:
            print(f"Failed to upload file to MinIO: {e}")
            raise
    
    async def upload_bytes(self, bucket_name: str, object_key: str, 
                        data: bytes, content_type: str = "application/octet-stream") -> str:
        """Upload bytes data to MinIO and return object URL"""
        if not self._connected:
            raise Exception("Not connected to MinIO")
        
        try:
            # Ensure bucket exists
            await self.create_bucket(bucket_name)
            
            # Upload bytes
            await asyncio.get_event_loop().run_in_executor(
                None,
                self.client.put_object,
                bucket_name,
                object_key,
                data,
                ExtraArgs={'ContentType': content_type}
            )
            
            # Generate URL
            return self._generate_object_url(bucket_name, object_key)
            
        except Exception as e:
            print(f"Failed to upload bytes to MinIO: {e}")
            raise
    
    async def download_file(self, bucket_name: str, object_key: str) -> bytes:
        """Download file from MinIO as bytes"""
        if not self._connected:
            raise Exception("Not connected to MinIO")
        
        try:
            response = await asyncio.get_event_loop().run_in_executor(
                None, self.client.get_object, bucket_name, object_key
            )
            return response['Body'].read()
            
        except ClientError as e:
            print(f"Failed to download file from MinIO: {e}")
            raise
    
    async def download_to_file(self, bucket_name: str, object_key: str, 
                           local_path: str) -> bool:
        """Download file from MinIO to local path"""
        if not self._connected:
            return False
        
        try:
            response = await asyncio.get_event_loop().run_in_executor(
                None, self.client.get_object, bucket_name, object_key
            )
            
            with open(local_path, 'wb') as f:
                f.write(response['Body'].read())
            
            return True
            
        except Exception as e:
            print(f"Failed to download file from MinIO: {e}")
            return False
    
    async def generate_presigned_url(self, bucket_name: str, object_key: str, 
                                 expiration: int = 3600) -> str:
        """Generate presigned URL for direct upload/download"""
        if not self._connected:
            raise Exception("Not connected to MinIO")
        
        try:
            url = await asyncio.get_event_loop().run_in_executor(
                None,
                self.client.generate_presigned_url,
                'put_object' if expiration > 0 else 'get_object',
                {'Bucket': bucket_name, 'Key': object_key},
                expiration
            )
            return url
            
        except Exception as e:
            print(f"Failed to generate presigned URL: {e}")
            raise
    
    async def delete_file(self, bucket_name: str, object_key: str) -> bool:
        """Delete file from MinIO"""
        if not self._connected:
            return False
        
        try:
            await asyncio.get_event_loop().run_in_executor(
                None, self.client.delete_object, bucket_name, object_key
            )
            return True
            
        except Exception as e:
            print(f"Failed to delete file from MinIO: {e}")
            return False
    
    async def list_files(self, bucket_name: str, prefix: str = "") -> list:
        """List files in bucket with optional prefix"""
        if not self._connected:
            return []
        
        try:
            response = await asyncio.get_event_loop().run_in_executor(
                None, self.client.list_objects_v2, Bucket=bucket_name, Prefix=prefix
            )
            
            return response.get('Contents', [])
            
        except Exception as e:
            print(f"Failed to list files in MinIO: {e}")
            return []
    
    def _generate_object_url(self, bucket_name: str, object_key: str) -> str:
        """Generate object URL from bucket and key"""
        protocol = "https" if self.secure else "http"
        return f"{protocol}://{self.endpoint}/{bucket_name}/{object_key}"
    
    async def health_check(self) -> bool:
        """Check if MinIO is healthy"""
        if not self._connected:
            return False
        
        try:
            await asyncio.get_event_loop().run_in_executor(
                None, self.client.list_buckets
            )
            return True
        except:
            return False

class MinIOClientFactory:
    """Factory for creating MinIO client from environment variables"""
    
    @staticmethod
    def create_from_env() -> MinIOClient:
        """Create MinIO client from environment variables"""
        endpoint = os.getenv("MINIO_ENDPOINT", "localhost:9000")
        access_key = os.getenv("MINIO_ACCESS_KEY", "minioadmin")
        secret_key = os.getenv("MINIO_SECRET_KEY", "minioadmin")
        region = os.getenv("MINIO_REGION", "us-east-1")
        secure = os.getenv("MINIO_SECURE", "false").lower() == "true"
        
        # Add protocol if not present
        if not endpoint.startswith(('http://', 'https://')):
            protocol = "https" if secure else "http"
            endpoint = f"{protocol}://{endpoint}"
        
        return MinIOClient(endpoint, access_key, secret_key, region, secure)

# Bucket constants
MINIO_BUCKETS = {
    "audio": "audio",
    "transcripts": "transcripts", 
    "analysis": "analysis",
    "temp": "temp"
}
