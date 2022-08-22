import { NextFunction, Request, Response } from "express";

export type Route = (req: Request, res: Response, next: NextFunction) => any;

export type IMailOptions = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export type Role = "user" | "admin";
