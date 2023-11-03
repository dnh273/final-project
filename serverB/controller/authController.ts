import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { createCustomError } from "../error/custom-api";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  User.create({ email, password });
  res.status(StatusCodes.OK).json({ msg: "Đăng ký thành công" });
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw createCustomError(
      "Please provide email and password",
      StatusCodes.BAD_REQUEST
    );
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw createCustomError("Incorrect email", StatusCodes.UNAUTHORIZED);
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    throw createCustomError("Incorrect password", StatusCodes.UNAUTHORIZED);
  }

  const token = jwt.sign({ user }, process.env.JWT_TOKEN, { expiresIn: "24h" });

  res.status(StatusCodes.OK).json({ accessToken: token });
};

export { register, login };
