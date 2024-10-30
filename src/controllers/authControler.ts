import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import { STATUS_CODE } from "../constant";
import UserModal from "../models/userModal";
import CustomError from "../util/CustomeError";

async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await UserModal.create({
      username,
      role,
      password: hashPassword,
    });

    res.status(STATUS_CODE.SUCCESS).json(user);
  } catch (er) {
    // res.status(400).send("error");
    const error = er as mongoose.Error.ValidationError;

    if (error.name === "ValidationError") {
      res.status(STATUS_CODE.VALIDATION_ERROR);
      const err = new CustomError(error.message, error.errors);
      next(err);
    } else {
      next(er);
    }
  }
}

async function login(req: Request, res: Response) {
  console.log(req.body);
}

export { login, register };
