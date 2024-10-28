import { Request, Response } from "express";

function register(req: Request, res: Response) {
  console.log(req.body);
}

export { register };
