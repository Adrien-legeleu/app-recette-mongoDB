import { api } from "../../config/api";
import { IRecipe } from "../../Types/recipes.type";
import { ITask } from '../../../../.history/frontend/src/Types/recipes.type_20240421131046';
import { ModalRecipe } from "../Recette";

interface IAddRecipesModalProps {
    open: (taskProperties: ITask) => void;
    isCreateModalOpen:boolean;
    onClose:()=>void

}

export const CreateRecipeModal=({onAddRecipe , open , onClose}: IAddRecipesModalProps)=>{
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
    return <ModalRecipe onCreateRecipe={onCreateRecipe} open={open} onClose={onClose} title="Create Recipe" />
}