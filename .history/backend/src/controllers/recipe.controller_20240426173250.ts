import { type Response } from "express";

import { RecipeModel } from "../models/recipe.model";

export class RecipeController {
  async findAll(req: any, res: Response): Promise<void> {
    try {
      const { userId } = req.user;
      const recipes = await RecipeModel.find({ userId });
      res.status(200).send(recipes);
    } catch (error: any) {
      console.log(error);
      res.status(500).send({
        error: error?.message,
      });
    }
  }
  async findOneById(req: any, res: Response): Promise<void> {
    try {
      const { userId } = req.user;
      const { recipeId } = req.params;
      const recipe = await RecipeModel.findOne({ userId, _id: recipeId });

      if (!recipe) {
        res.status(404).send({
          error: `Recipe "${recipeId}" not found`,
        });
        return;
      }

      res.status(200).send(recipe);
    } catch (error: any) {
      console.log(error);
      res.status(500).send({
        error: error?.message,
      });
    }
  }
  async create(req: any, res: Response): Promise<void> {
    try {
      const { description, title } = req.body;
      const { userId } = req.user;

      const newRecipe = await RecipeModel.create({
        description,
        title,
        userId,
      });

      res.status(200).send(newRecipe);
    } catch (error: any) {
      console.log(error);
      res.status(500).send({
        error: error?.message,
      });
    }
  }
  async updateOneById(req: any, res: Response): Promise<void> {
    try {
      const { description, title, status } = req.body;
      const { userId } = req.user;
      const { recipeId } = req.params;

      const recipeUpdate = await RecipeModel.findOneAndUpdate(
        { _id: recipeId, userId },
        {
          ...(description ? { description } : {}),
          ...(title ? { title } : {}),
          ...(status ? { status } : {}),
        },
        { new: true }
      );
      if (!recipeUpdate) {
        res.status(404).send({
          error: `Task ${recipeId} not found`,
        });
        return;
      }
      res.status(201).send(recipeUpdate);
    } catch (error: any) {
      console.log(error);
      res.status(500).send({
        error: error?.message,
      });
    }
  }
  async delete(req: any, res: Response): Promise<void> {
   try {
    
   } catch (error:any) {
      console.log(error);
      res.status(500).send({
        error: error?.message,
      });
   }
}
