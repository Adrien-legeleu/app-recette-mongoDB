import { api } from "../../config/api";
import { IRecipe } from "../../Types/recipes.type";
import { ITask } from '../../../../.history/frontend/src/Types/recipes.type_20240421131046';

interface IAddTaskModalProps {
    onAddTask: (taskProperties: ITask) => void;
}

export const CreateRecipeModal=()=>{
    const onCreateRecipe=async(recipeData : Partial<IRecipe>)=>{
        try {
            const {description } = recipeData
            const {title } = recipeData
            if (!description || !title) {
                throw new Error("description or title required");
                
            }
            const newRecipe ={description , title}
            const resonse = await api.post("/recipes", newRecipe)
            onAddRecipe(response?.data)
        } catch (error) {
            console.log(error);
            
        }
    }
}