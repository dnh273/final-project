import { NextFunction, Request, Response } from "express";
import { createCustomError } from "../error/custom-api";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let authHeader = req.header("Authorization");

    if (!authHeader) {
      throw createCustomError("Access Denied", StatusCodes.UNAUTHORIZED);
    }
    const token = authHeader.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_TOKEN);

    (req as CustomRequest).token = payload;
    next();
  } catch (error) {
    throw createCustomError("Authentication Invalid", StatusCodes.UNAUTHORIZED);
  }
};

export { authenticateUser };
