import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class ConfigService {
  get appConfig() {
    return {
      env: process.env.NODE_ENV || 'development',
      sqs: {
        ordersQueueUrl: 'https://sqs.<region>.amazonaws.com/<accountId>/<QueueName>',
      },
      sns: {
        orderPlacedQueueArn: 'arn:aws:sns:<region>:<accountId>:<topicName>',
      },
    };
  }
}
