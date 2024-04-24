import { IRecipe } from "../../Types/recipes.type"

export const EditRecipeModal=()=>{
        const onSaveRecipe=async(recipeData: Partial<IRecipe>)=>{
            try {
                const {description , title , status} = recipeData
                if (!description || !status || !title) {
                    throw new Error("data for your recipe is required");
                    
                }                
            } catch (error) {
                console.log(error);
                
            }
        }
            
    return(
        <div>sss</div>
    )
}