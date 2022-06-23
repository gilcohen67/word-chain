const { DynamoDB } = require('@aws-sdk/client-dynamodb');
const { marshall } = require('@aws-sdk/util-dynamodb');
require('dotenv').config();

const client = new DynamoDB({ region: process.env.AWS_DEFAULT_REGION });

exports.client = client;

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
// daily_words: {
//   L: [
//     {
//       M: {
//         word: {
//           S: dailyWords[0].word
//         },
//         thes: {
//           M: {
//             meta: {
//               M: {
//                 syns: {}
//               }
//             }
//           }
//         }
//       }
//     }
//   ]
// }

// client.query({
//   TableName: "word-tree",
//   ExpressionAttributeValues: {
//     ':word': {
//       S: 'cent',
//     },
//   },
//   KeyConditionExpression: 'word_id = :word',
//   limit: 1
// })
//   .then(res => {
//     console.log(res)
//     console.log(res.Items[0])
//   })
//   .catch(err => {
//     console.log(err)
//   })