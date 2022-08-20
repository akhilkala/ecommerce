import express from "express";
import { login, register, verify } from "./controllers/auth";
import { body } from "express-validator";
import { validateRequest } from "./middleware/validateRequest";

const router = express.Router();

router.post(
  "/auth/register",
  body("name").notEmpty(),
  body("email").notEmpty().isEmail(),
  body("password").notEmpty().isLength({ min: 8 }),
  validateRequest,
  register
);
router.post(
  "/auth/login",
  body("email").notEmpty().isEmail(),
  body("password").notEmpty().isLength({ min: 8 }),
  validateRequest,
  login
);
router.patch("/auth/verify/:token", verify);

export default router;
