import { type Request, type Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IUser, UserModel } from "../models/user.model";

export class AuthController {
  static setCookie(res: Response, user: IUser) {
    const authToken = AuthController.getToken(user);

    res.cookie("authToken", authToken, {
      maxAge: 1000 * 60 * 24,
    });
  }

  static getToken(user: IUser): string {
    const jwtSecret = process.env.JWT_SECRET ?? "";

    if (!jwtSecret) {
      throw new Error("jwt secret is not defined");
    }

    return jwt.sign(
      {
        userId: user._id,
      },
      jwtSecret,
      {
        expiresIn: "1d",
      }
    );
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(401).send({
          error: "Email or password are incorrect",
        });
        return;
      }

      const user = await UserModel.findOne({ email });

      if (!user) {
        res.status(401).send({
          error: "email or password are incorrect",
        });
        return;
      }

      const isCorrectPassword = bcrypt.compareSync(password, user.password);

      if (!isCorrectPassword) {
        res.status(401).send({
          error: "email or password are incorrect",
        });
        return;
      }
      const authToken = AuthController.getToken(user);
      user.password = "";
      res.status(200).send({ authToken, user, message: "connected" });
    } catch (error: any) {
      console.log(error);
      res.status(500).send({ error: error?.message });
    }
  }

  async register(req: Request, res: Response): Promise<void> {
    try {
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        res.status(400).send({
          error: "missing properties",
        });
        return;
      }
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(password, salt);

      const user: IUser = await UserModel.create({
        email,
        password: hashPassword,
        username,
      });

      const authToken = AuthController.getToken(user);
      user.password = "";

      res.status(201).send({ authToken, user });
    } catch (error: any) {
      console.log(error);
      res.status(500).send({ error: error?.message });
    }
  }
}
