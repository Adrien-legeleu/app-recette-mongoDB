import { api } from "../../config/api";
import { IRecipe } from "../../Types/recipes.type"
import { ModalRecipe } from "../Recette";

interface IRecipeEditProps{
    onClose:()=>void;
    onEditRecipe:(recipeProperties : IRecipe , recipeId: string)=>void
    recipeToEdit:any
}

export const EditRecipeModal=({onClose  , onEditRecipe , recipeToEdit} : IRecipeEditProps)=>{
        const onSaveRecipe=async(recipeData:any)=>{
            try {
                const {description , title , status} = recipeData
                if (!recipeToEdit) throw new Error('recipe is required');
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
        <ModalRecipe onClose={onClose}   title='Edit your Recipe' initialRecipeData={{description: recipeToEdit?.description , title: recipeToEdit?.title , status: recipeToEdit?.status }} onSaveRecipe={onSaveRecipe} params={{description:true , title:true , status:true}} />
    )
}