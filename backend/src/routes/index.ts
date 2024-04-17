import express from "express";
import authRouter from "./auth.route";
import recipeRouter from "./recipe.route";

const appRouter = express.Router();

appRouter.use("/auth", authRouter);

appRouter.use("/recipes", recipeRouter);

export default appRouter;
