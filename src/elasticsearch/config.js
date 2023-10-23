import { Client } from '@elastic/elasticsearch';

let client;

(() => {
  try {
    client = new Client({
      node: process.env.ELASTICSEARCH_URL,
    });

    console.log('Connected to ElasticSearch');
  } catch (e) {
    throw new Error('Error connecting to ElasticSearch: ', e);
  }
})();
// (() => {
//   try {
//     client = new Client({
//       cloud: {
//         id: process.env.ELASTICSEARCH_CLOUD_ID,
//       },
//       auth: {
//         username: process.env.ELASTICSEARCH_USERNAME,
//         password: process.env.ELASTICSEARCH_PASSWORD,
//       },
//     });

//     console.log('Connected to ElasticSearch');
//   } catch (e) {
//     throw new Error('Error connecting to ElasticSearch: ', e);
//   }
// })();

export default client;
