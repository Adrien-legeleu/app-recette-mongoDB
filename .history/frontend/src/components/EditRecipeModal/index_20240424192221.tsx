import { IRecipe } from "../../Types/recipes.type"

export const EditRecipeModal=()=>{
        const onSaveRecipe=async(recipeData: Partial<IRecipe>)=>{
            try {
                description , title , status} = recipeData
        if (!description || ! status  {{}}) {
            
        }
    
            } catch (error) {
                
            }
        }
    return(
        <div>sss</div>
    )
}