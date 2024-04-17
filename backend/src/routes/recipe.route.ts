import express from "express";
import { isConnectedMiddleware } from "../midlewares";
import { recipeController } from "../controllers";

const recipeRouter = express.Router();

recipeRouter.get("/", isConnectedMiddleware.execute, recipeController.findAll);
recipeRouter.get(
  "/:recipeId",
  isConnectedMiddleware.execute,
  recipeController.findOneById
);
recipeRouter.post("/", isConnectedMiddleware.execute, recipeController.create);
recipeRouter.patch(
  "/:recipeId",
  isConnectedMiddleware.execute,
  recipeController.updateOneById
);
recipeRouter.delete(
  "/:recipeId",
  isConnectedMiddleware.execute,
  recipeController.delete
);

export default recipeRouter;
