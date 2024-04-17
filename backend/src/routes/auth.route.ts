import express from "express";
import { authController } from "../controllers";

const authRouter = express.Router();

authRouter
  .post("/register", authController.register)
  .post("/login", authController.login);

export default authRouter;
