const { DynamoDB } = require('@aws-sdk/client-dynamodb');
require('dotenv').config();

console.log(process.env.AWS_DEFAULT_REGION);

const client = new DynamoDB({region: process.env.AWS_DEFAULT_REGION})

client.query({
  TableName: "word-tree",
  ExpressionAttributeValues: {
    ':word': {
      S: 'cent',
    },
  },
  KeyConditionExpression: 'word_id = :word',
  limit: 1
})
  .then(res => {
    console.log(res)
    console.log(res.Items[0])
  })
  .catch(err => {
    console.log(err)
  })