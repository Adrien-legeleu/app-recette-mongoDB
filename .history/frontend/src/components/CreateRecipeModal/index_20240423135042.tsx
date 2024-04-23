import { api } from "../../config/api";
import { IRecipe } from "../../Types/recipes.type";
import { ModalRecipe } from "../Recette";

interface IAddRecipesModalProps {
    onClose:()=>void;
    onAddRecipe:(taskProperties : IRecipe)=>void

}

export const CreateRecipeModal=({onAddRecipe  , onClose}: IAddRecipesModalProps)=>{
    const onCreateRecipe=async(recipeData : Partial<IRecipe>)=>{
        try {
            const {description } = recipeData
            const {title } = recipeData
            if (!description || !title) {
                throw new Error("description or title required");
                
            }
            const newRecipe ={description , title}
            const response = await api.post("/recipes", newRecipe)
            onAddRecipe(response?.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    return <ModalRecipe onCreateRecipe={onCreateRecipe} onClose={onClose} title="Your new Recipe" params={{ description:true , title:true}} />
}