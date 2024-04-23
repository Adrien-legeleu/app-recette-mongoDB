import { api } from "../../config/api";
import { IRecipe } from "../../Types/recipes.type";
import { ModalRecipe } from "../Recette";

interface IAddRecipesModalProps {
    onClose:()=>void;
    onAddRecipe:(taskProperties : IRecipe)=>void

}

export const CreateRecipeModal=({onAddRecipe  , onClose}: IAddRecipesModalProps)=>{
    const onSaveRecipe=async(recipeData : Partial<IRecipe>)=>{
        try {
            const {description } = recipeData
            const {title } = recipeData
            if (!description || !title) {
                throw new Error("description or title required");
                
            }
            const newRecipe ={description , title}
            const response = await api.post("/recipes", newRecipe)
            if (!!onAddRecipe) {
                onAddRecipe(response?.data);
            }
            onClose()
        } catch (error) {
            console.log(error);
            
        }
    }
    return <div>erer</div>
}