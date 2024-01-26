import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const notFound = (req, res, next) => {
  const err = new Error("This route does not existed.");
  err.status = StatusCodes.NOT_FOUND;
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  const status = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  const message = err.message || ReasonPhrases.INTERNAL_SERVER_ERROR;
  res.status(status).json({
    message: message,
    status: status,
    code: ReasonPhrases.INTERNAL_SERVER_ERROR,
  });
};
