import { IRecipe } from "../../Types/recipes.type"

interface IRecipeEditProps{
    onClose:()=>void;
    recipes: any
}

export const EditRecipeModal=({onClose , recipes} : IRecipeEditProps)=>{
        const onSaveRecipe=async(recipeData: Partial<IRecipe>)=>{
            try {
                const {description , title , status} = recipeData
                if (!description || !status || !title) {
                    throw new Error("Data for your recipe is required");
                    
                }                
            } catch (error) {
                console.log(error);
                
            }
        }
            
    return(
        <div>sss</div>
    )
}