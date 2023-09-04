import { greet } from './usecases/greet';

export const handler = async (event: Record<string, any>) => {
  try {
    return await handleSuccess(event);
  } catch (error: any) {
    return await handleFailure(error);
  }
};

async function handleSuccess(event: Record<string, any>) {
  const { id, version } = getValues(event);

  const response = await greet(id, version);

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
}

async function handleFailure(error: any) {
  const statusCode = error?.cause || 400;
  return {
    statusCode,
    body: JSON.stringify(error.message)
  };
}

function getValues(event: Record<string, any>) {
  const id = event?.queryStringParameters?.id || 1;
  const version = parseInt(event?.headers?.['x-client-version']) || 1;

  return { id, version };
}
