import { AuthController } from "./auth.controller";
import { RecipeController } from "./recipe.controller";

const authController = new AuthController();
const recipeController = new RecipeController();

export { authController, recipeController };
