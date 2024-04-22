import { api } from "../../config/api";
import { IRecipe } from "../../Types/recipes.type";
import { ITask } from '../../../../.history/frontend/src/Types/recipes.type_20240421131046';
import { ModalRecipe } from "../Recette";

interface IAddRecipesModalProps {
    onAddRecipe: (taskProperties: ITask) => void;
}

export const CreateRecipeModal=({onAddRecipe}: IAddRecipesModalProps)=>{
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
    return <ModalRecipe/>
}