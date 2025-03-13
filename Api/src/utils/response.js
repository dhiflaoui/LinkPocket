const response = (handler) => (req, res, next) => {
  handler(res, req, next).catch((err) => {
    if (process.env.NODE_ENV !== "production") {
      console.log(err);
    }
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
      },
    });
  });
};
module.exports = response;
