export const handler = async (event: Record<string, any>) => {
  const number = event.queryStringParameters.id;
  const response = await fetch(`https://swapi.dev/api/people/${number}`).then((res: any) =>
    res.json()
  );

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};
