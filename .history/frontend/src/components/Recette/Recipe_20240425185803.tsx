import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { IRecipe } from '../../Types/recipes.type';
import { useMemo } from 'react';

interface IRecipeProps {
    recipe: IRecipe;
    onChangeRecipe: (recipeProperties: Partial<IRecipe> , recipeId:string)=>void;
    deleteRecipe:(recipeId:string)=>void
    openRecipeToEdit:(recipe:string)=>void
}
interface IData {
    isDone: boolean;
    newStatus: "in progress" | "done"
}

export const Recipe=({recipe , deleteRecipe , openRecipeToEdit , onChangeRecipe}:IRecipeProps)=>{

    const {isDone, newStatus} = useMemo<IData>(() => {
        const isDone = recipe.status === 'done';

        return {
            isDone,
            newStatus: isDone ? "in progress" : "done",
        };
    }, [recipe.status]);

    return(
        <div key={`recipe : ${recipe._id}`} className={`rounded-3xl ${isDone ? "bg-green-800" : "bg-gray-100" } gap-5 flex flex-col pb-5 pt-5 pr-10 pl-10 text-center`} onClick={()=>onChangeRecipe({status:newStatus} , recipe._id)}> 
                        <h4 className="text-2xl capitalize">{recipe.title}</h4>
                        <p>{recipe.description}</p>
                        <div className="flex items-center justify-end gap-5">
                            <div onClick={()=>deleteRecipe(recipe._id)}>
                                <DeleteIcon/>
                            </div>
                            <div onClick={()=>openRecipeToEdit(recipe)}>
                                <SettingsIcon/>
                            </div>
                            
                        </div>
        </div>
    )
}