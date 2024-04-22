import { IRecipe } from "../../Types/recipes.type";

const CreateRecipeModal=()=>{
    onCreateRecipe=async(recipeDAta : Partial<IRecipe>)=>{
        try {
            const {description } = recipeData
            const {title } = recipeData
        } catch (error) {
            console.log(error);
            
        }
    }
}