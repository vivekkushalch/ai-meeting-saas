"""
Storage client for MinIO operations
"""

import asyncio
from typing import Optional
from urllib.parse import urlparse

from .config import config, BUCKETS

class StorageClient:
    """MinIO storage client"""
    
    def __init__(self):
        self.endpoint = config.storage_endpoint
        self.access_key = config.storage_access_key
        self.secret_key = config.storage_secret_key
        self.region = config.storage_region
        self.secure = config.storage_secure
        self._client = None
    
    async def connect(self) -> bool:
        """Connect to MinIO"""
        try:
            from minio import Minio
            from minio.error import S3Error
            
            self._client = Minio(
                endpoint=self.endpoint,
                access_key=self.access_key,
                secret_key=self.secret_key,
                secure=self.secure,
                region=self.region
            )
            
            # Test connection and create buckets
            for bucket_name in BUCKETS.values():
                if not self._client.bucket_exists(bucket_name):
                    self._client.make_bucket(bucket_name, location=self.region)
            
            return True
            
        except Exception as e:
            print(f"Failed to connect to storage: {e}")
            return False
    
    async def upload_file(self, bucket: str, object_key: str, file_path: str, content_type: str = "application/octet-stream") -> str:
        """Upload file to MinIO"""
        try:
            self._client.fput_object(bucket, object_key, file_path, content_type=content_type)
            return f"minio://{bucket}/{object_key}"
        except Exception as e:
            raise Exception(f"Failed to upload file: {e}")
    
    async def upload_bytes(self, bucket: str, object_key: str, data: bytes, content_type: str = "application/octet-stream") -> str:
        """Upload bytes to MinIO"""
        try:
            from io import BytesIO
            self._client.put_object(bucket, object_key, BytesIO(data), len(data), content_type=content_type)
            return f"minio://{bucket}/{object_key}"
        except Exception as e:
            raise Exception(f"Failed to upload bytes: {e}")
    
    async def download_file(self, bucket: str, object_key: str) -> bytes:
        """Download file from MinIO"""
        try:
            response = self._client.get_object(bucket, object_key)
            return response.read()
        except Exception as e:
            raise Exception(f"Failed to download file: {e}")
    
    async def delete_object(self, bucket: str, object_key: str):
        """Delete object from MinIO"""
        try:
            self._client.remove_object(bucket, object_key)
        except Exception as e:
            raise Exception(f"Failed to delete object: {e}")
    
    async def list_objects(self, bucket: str, prefix: str = ""):
        """List objects in bucket"""
        try:
            objects = self._client.list_objects(bucket, prefix=prefix)
            return list(objects)
        except Exception as e:
            raise Exception(f"Failed to list objects: {e}")
    
    @staticmethod
    def parse_url(url: str) -> tuple[str, str]:
        """Parse MinIO URL to get bucket and object key"""
        parsed = urlparse(url)
        path_parts = parsed.path.lstrip('/').split('/', 1)
        
        if len(path_parts) < 2:
            raise ValueError("Invalid MinIO URL format")
        
        return path_parts[0], path_parts[1]

# Factory
def create_storage_client() -> StorageClient:
    """Create storage client"""
    return StorageClient()
