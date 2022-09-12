const { DynamoDB } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');

const client = new DynamoDB({ region: process.env.AWS_DEFAULT_REGION });

exports.getWordsByDate = (dateHash) => {
  return client.getItem({
    TableName: 'daily-words',
    AttributesToGet: ['daily_words'],
    Key: {
      date_hash: {
        S: dateHash
      }
    }
  });
}

exports.insertDailyWords = (dateHash, dailyWords) => {
  return client.putItem({
    TableName: 'daily-words',
    ConditionExpression: 'attribute_not_exists(daily_words)',
    Item: {
      date_hash: marshall(dateHash),
      daily_words: {
        L: marshall(dailyWords)
      }
    }
  });
}

exports.getLeaderboardByDate = (dateHash) => {
  return client.scan({
    TableName: 'leaderboards',
    FilterExpression: '#date_hash = :date',
    ExpressionAttributeNames: {
      '#date_hash': 'date_hash'
    },
    ExpressionAttributeValues: {
      ':date': {
        S: dateHash,
      },
    },
    ProjectionExpression: 'username, moves'
  });
}

exports.insertToLeaderboards = (data) => {
  return client.putItem({
    TableName: 'leaderboards',
    Item: marshall(data),
  });
}
