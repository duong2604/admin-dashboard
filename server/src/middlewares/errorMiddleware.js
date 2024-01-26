import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const notFound = (req, res, next) => {
  res.status(404).json({ msg: "not found" });
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
