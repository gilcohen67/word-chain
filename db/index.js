const { DynamoDB } = require('@aws-sdk/client-dynamodb');
require('dotenv').config();

console.log(process.env.AWS_DEFAULT_REGION);