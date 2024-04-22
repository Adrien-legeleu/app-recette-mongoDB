import { IRecipe } from "../../Types/recipes.type";

const CreateRecipeModal=()=>{
    onCreateRecipe=async(recipeDAta : Partial<IRecipe>)=>{
        try {
            const {description } = recipeData
            const {title } = recipeData
            if (!description || !title) {
                throw new Error("description or title required");
                
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}