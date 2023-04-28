const { isBoom } = require("@hapi/boom");

function boomErrorHandler(err, req, res, next) {
  if (isBoom(err)) {
    const { payload, statusCode } = err.output;
    res.status(statusCode).json(payload);
  } else next(err);
}

module.exports = boomErrorHandler;
