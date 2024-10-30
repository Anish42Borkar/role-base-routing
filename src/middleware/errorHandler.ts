import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import { STATUS_CODE } from "../constant";

const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  switch (statusCode) {
    case STATUS_CODE.FORBIDDEN:
      res.json(err);
      break;
    case STATUS_CODE.NOT_FOUND:
      res.json(err);
      break;
    case STATUS_CODE.UNAUTHORIZED:
      res.json(err);
      break;
    case STATUS_CODE.VALIDATION_ERROR:
      res.json(err);
      break;
    default:
      res.json(err);
      break;
  }
};

export { errorHandler };
