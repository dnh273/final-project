import { NextFunction, Request, Response } from "express";
import { CustomAPIError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (
  err: CustomAPIError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: "INTERNAL SERVER ERROR" });
};

export default errorHandlerMiddleware;
