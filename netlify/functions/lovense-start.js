exports.handler = async (event) => {
  const seconds = event.queryStringParameters.time || 60;

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, seconds })
  };
};
