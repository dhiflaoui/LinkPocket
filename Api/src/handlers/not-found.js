exports.handler = async (res, req) => {
  res.status(404);
  res.send({ error: `Not Found ${req.originalUrl}` });
};
