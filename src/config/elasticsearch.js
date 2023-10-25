import { Client } from '@elastic/elasticsearch';

let client;

try {
  client = new Client({
    node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
  });

  console.log('Connected to ElasticSearch');
} catch (e) {
  throw new Error('Error connecting to ElasticSearch: ', e);
}

export default client;
