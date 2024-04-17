import mongoose from "mongoose";

export enum RecipeStatusEnum {
  NOT_DONE = "not done",
  DONE = "done",
}

export interface IRecipe {
  _id: string;
  title: string;
  description: string;
  status: RecipeStatusEnum;
  userId: string;
  createAt: Date;
  updateAt: Date;
}

const RecipeSchema = new mongoose.Schema<IRecipe>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [RecipeStatusEnum.NOT_DONE, RecipeStatusEnum.DONE],
      default: RecipeStatusEnum.NOT_DONE,
      required: true,
    },
    userId: {
      type: String,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const RecipeModel = mongoose.model("recipe", RecipeSchema);
