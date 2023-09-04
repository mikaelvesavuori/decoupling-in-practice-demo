import schema_v1 from '../api/schema_1.0.0.json';
import schema_v2 from '../api/schema_2.0.0.json';

export const handler = async (event: Record<string, any>) => {
  const schema = event?.queryStringParameters?.version === '2.0.0' ? schema_v2 : schema_v1;

  return {
    statusCode: 200,
    body: JSON.stringify(schema)
  };
};
