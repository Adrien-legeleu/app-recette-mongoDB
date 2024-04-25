import { api } from "../../config/api";
import { IRecipe } from "../../Types/recipes.type"
import { ModalRecipe } from "../Recette";

interface IRecipeEditProps{
    onClose:()=>void;
    onEditRecipe:(recipeProperties : IRecipe , recipeId: string)=>void
    recipeToEdit:any
}

export const EditRecipeModal=({onClose  , onEditRecipe , recipeToEdit} : IRecipeEditProps)=>{
        const onSaveRecipe=async(recipeData: Partial<IRecipe>)=>{
            try {
                const {description , title , status} = recipeData
                if (!description || !status || !title) {
                    throw new Error("Data for your recipe is required");
                    
                }
                api.patch(`/recipes/${recipeToEdit._id}` , recipeData)    
                if (onEditRecipe) {
                    onEditRecipe(recipeData , recipeToEdit._id)
                }    
                onClose()       
            } catch (error) {
                console.log(error);
                
            }
        }
            
    return(
        <div>sds</div>
    )
}