import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { HTTPError, HttpStatusCode } from "../utils/utilities";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    throw new HTTPError(
      HttpStatusCode.BAD_REQUEST,
      "Request validation failed"
    );
  next();
};
