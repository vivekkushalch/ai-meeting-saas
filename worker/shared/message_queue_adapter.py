"""
Abstract Message Queue Adapter Pattern for Worker Services
Supports RabbitMQ, Redis, and future message brokers
"""

from abc import ABC, abstractmethod
from typing import Dict, Any, Optional, Callable
import json
import asyncio
import os
from enum import Enum

class QueueType(Enum):
    RABBITMQ = "rabbitmq"
    REDIS = "redis"
    KAFKA = "kafka"

class MessageQueueAdapter(ABC):
    """Abstract interface for message queue implementations"""
    
    @abstractmethod
    async def connect(self) -> bool:
        """Establish connection to message broker"""
        pass
    
    @abstractmethod
    async def publish(self, queue_name: str, message: Dict[str, Any]) -> bool:
        """Publish a message to a queue"""
        pass
    
    @abstractmethod
    async def consume(self, queue_name: str, callback: Callable) -> None:
        """Consume messages from a queue"""
        pass
    
    @abstractmethod
    async def create_queue(self, queue_name: str, **kwargs) -> bool:
        """Create a new queue"""
        pass
    
    @abstractmethod
    async def delete_queue(self, queue_name: str) -> bool:
        """Delete a queue"""
        pass
    
    @abstractmethod
    async def close(self) -> None:
        """Close connection to message broker"""
        pass
    
    @abstractmethod
    async def health_check(self) -> bool:
        """Check if message broker is healthy"""
        pass

class RabbitMQAdapter(MessageQueueAdapter):
    """RabbitMQ implementation of message queue adapter"""
    
    def __init__(self, connection_url: str):
        self.connection_url = connection_url
        self.connection = None
        self.channel = None
        self._connected = False
    
    async def connect(self) -> bool:
        """Establish connection to RabbitMQ"""
        try:
            import aio_pika
            self.connection = await aio_pika.connect_robust(self.connection_url)
            self.channel = await self.connection.channel()
            await self.channel.set_qos(prefetch_count=1)
            self._connected = True
            return True
        except Exception as e:
            print(f"Failed to connect to RabbitMQ: {e}")
            return False
    
    async def publish(self, queue_name: str, message: Dict[str, Any]) -> bool:
        """Publish message to RabbitMQ queue"""
        if not self._connected:
            return False
        
        try:
            await self.channel.declare_queue(queue_name, durable=True)
            
            message_body = {
                "data": json.dumps(message).encode(),
                "content_type": 'application/json',
                "delivery_mode": 2  # Persistent message
            }
            
            import aio_pika
            msg = aio_pika.Message(**message_body)
            
            await self.channel.default_exchange.publish(
                msg,
                routing_key=queue_name
            )
            return True
        except Exception as e:
            print(f"Failed to publish to RabbitMQ: {e}")
            return False
    
    async def consume(self, queue_name: str, callback: Callable) -> None:
        """Consume messages from RabbitMQ queue"""
        if not self._connected:
            return
        
        try:
            await self.channel.declare_queue(queue_name, durable=True)
            
            async def wrapper(message):
                async with message.process():
                    try:
                        body = json.loads(message.body.decode())
                        await callback(body)
                    except Exception as e:
                        print(f"Error processing message: {e}")
            
            await self.channel.basic_consume(queue_name, wrapper)
            
            # Keep consuming
            while self._connected:
                await asyncio.sleep(1)
                
        except Exception as e:
            print(f"Error consuming from RabbitMQ: {e}")
    
    async def create_queue(self, queue_name: str, **kwargs) -> bool:
        """Create RabbitMQ queue"""
        if not self._connected:
            return False
        
        try:
            await self.channel.declare_queue(
                queue_name, 
                durable=kwargs.get('durable', True),
                auto_delete=kwargs.get('auto_delete', False)
            )
            return True
        except Exception as e:
            print(f"Failed to create queue: {e}")
            return False
    
    async def delete_queue(self, queue_name: str) -> bool:
        """Delete RabbitMQ queue"""
        if not self._connected:
            return False
        
        try:
            queue = await self.channel.declare_queue(queue_name, durable=True)
            await queue.delete()
            return True
        except Exception as e:
            print(f"Failed to delete queue: {e}")
            return False
    
    async def close(self):
        """Close RabbitMQ connection"""
        self._connected = False
        if self.connection:
            await self.connection.close()
    
    async def health_check(self) -> bool:
        """Check if RabbitMQ is healthy"""
        return self._connected and self.connection and not self.connection.is_closed

class RedisAdapter(MessageQueueAdapter):
    """Redis implementation of message queue adapter"""
    
    def __init__(self, connection_url: str):
        self.connection_url = connection_url
        self.redis = None
        self._connected = False
    
    async def connect(self) -> bool:
        """Establish connection to Redis"""
        try:
            import aioredis
            self.redis = await aioredis.from_url(self.connection_url)
            # Test connection
            await self.redis.ping()
            self._connected = True
            return True
        except Exception as e:
            print(f"Failed to connect to Redis: {e}")
            return False
    
    async def publish(self, queue_name: str, message: Dict[str, Any]) -> bool:
        """Publish message to Redis list (queue)"""
        if not self._connected:
            return False
        
        try:
            await self.redis.lpush(queue_name, json.dumps(message))
            return True
        except Exception as e:
            print(f"Failed to publish to Redis: {e}")
            return False
    
    async def consume(self, queue_name: str, callback: Callable) -> None:
        """Consume messages from Redis list"""
        if not self._connected:
            return
        
        try:
            while self._connected:
                try:
                    message = await self.redis.brpop(queue_name, timeout=1)
                    if message:
                        body = json.loads(message[1].decode())
                        await callback(body)
                except Exception as e:
                    print(f"Error consuming from Redis: {e}")
                    await asyncio.sleep(1)
        except Exception as e:
            print(f"Redis consumer error: {e}")
    
    async def create_queue(self, queue_name: str, **kwargs) -> bool:
        """Redis doesn't need explicit queue creation"""
        return True
    
    async def delete_queue(self, queue_name: str) -> bool:
        """Delete Redis list"""
        if not self._connected:
            return False
        
        try:
            await self.redis.delete(queue_name)
            return True
        except Exception as e:
            print(f"Failed to delete Redis queue: {e}")
            return False
    
    async def close(self):
        """Close Redis connection"""
        self._connected = False
        if self.redis:
            await self.redis.close()
    
    async def health_check(self) -> bool:
        """Check if Redis is healthy"""
        if not self._connected or not self.redis:
            return False
        try:
            await self.redis.ping()
            return True
        except:
            return False

class MessageQueueFactory:
    """Factory for creating message queue adapters based on configuration"""
    
    @staticmethod
    def create_adapter(queue_type: QueueType, connection_url: str) -> MessageQueueAdapter:
        """Create appropriate message queue adapter"""
        if queue_type == QueueType.RABBITMQ:
            return RabbitMQAdapter(connection_url)
        elif queue_type == QueueType.REDIS:
            return RedisAdapter(connection_url)
        else:
            raise ValueError(f"Unsupported queue type: {queue_type}")
    
    @staticmethod
    def create_from_env() -> MessageQueueAdapter:
        """Create adapter from environment variables"""
        queue_type_str = os.getenv("MESSAGE_QUEUE_TYPE", "redis").lower()
        connection_url = os.getenv("MESSAGE_QUEUE_URL", "")
        
        if queue_type_str == "rabbitmq":
            queue_type = QueueType.RABBITMQ
            if not connection_url:
                connection_url = os.getenv("RABBITMQ_URL", "amqp://guest:guest@localhost:5672/")
        else:
            queue_type = QueueType.REDIS
            if not connection_url:
                connection_url = os.getenv("REDIS_URL", "redis://localhost:6379")
        
        return MessageQueueFactory.create_adapter(queue_type, connection_url)

# Queue configuration constants
WORKER_QUEUES = {
    "transcription_jobs": "worker_transcription_jobs",
    "ai_analysis_jobs": "worker_ai_analysis_jobs",
    "job_status_updates": "worker_job_status_updates",
    "notifications": "worker_notifications"
}
