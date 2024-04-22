import { IRecipe } from "../../Types/recipes.type";

const CreateRecipeModal=()=>{
    onCreateRecipe=async(recipeDAta : Partial<IRecipe>)=>{
        try {
            const {description } = recipeData
            const {title } = recipeData
            if (!description || !title) {
                
            }
        } catch (error) {
            console.log(error);
            
        }
    }
}