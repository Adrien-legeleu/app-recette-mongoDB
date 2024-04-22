import { api } from "../../config/api";
import { IRecipe } from "../../Types/recipes.type";

export const CreateRecipeModal=()=>{
    onCreateRecipe=async(recipeData : Partial<IRecipe>)=>{
        try {
            const {description } = recipeData
            const {title } = recipeData
            if (!description || !title) {
                throw new Error("description or title required");
                
            }
            const newRecipe ={description , title}
            const resonse = await api.post("/recipes", newRecipe)
            onAddRecipe(response?.data)
        } catch (error) {
            console.log(error);
            
        }
    }
}