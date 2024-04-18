import express from "express";
import { authController } from "../controllers";

const authRouter = express.Router();

authRouter
  .post("/register", authController.register)
  .post("/login", authController.login);
    .get("/check-token", isConnectedMiddleware.execute, authController.checkToken)


export default authRouter;
