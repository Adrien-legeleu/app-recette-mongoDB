import { useEffect, useMemo, useState } from "react";
import { api } from "../../config/api";
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { IRecipe } from "../../Types/recipes.type";
import { CreateRecipeModal } from "../CreateRecipeModal";
import { EditRecipeModal } from "../EditRecipeModal";
import { Recipe } from "./Recipe";

export const InterfaceRecipe = () => {
    const openModal = () => setCreateIsOpenModal(true);
    const [recipeToEdit , setRecipeToEdit] = useState<IRecipe | null>(null) 
    const [allRecipes, setAllRecipes] = useState<IRecipe[]>([]);
    const [isEditModalOpen , setIsEditOpenModal] = useState(false)
    const [isCreateModalOpen , setCreateIsOpenModal] = useState(false)

    const fetchRecipes = async () => {
        try {
            const response = await api.get("/recipes");
            setAllRecipes(response.data); 
        } catch (error) {
            console.error("Error fetching recipes:", error);
        }
    };
    useEffect(() => {
        fetchRecipes();
    }, []);

    const deleteRecipe=async(recipeId:string)=>{
        try {            
            await api.delete(
                `/recipes/${recipeId}`,
            );
            setAllRecipes((prev)=> {
                return prev.filter((allRecipes:IRecipe)=> recipeId !== allRecipes._id)
            } )
        } catch (error) {
            console.log(error);
        }
    }
    const openRecipeToEdit=(recipe:IRecipe)=>{
        setRecipeToEdit(recipe)
        setIsEditOpenModal(true)

    }

    const onAddRecipe=(taskProperties : IRecipe)=>{
        setAllRecipes((prev)=>{
            return [
                ...prev , 
                taskProperties
            ]
        })
    }
    const onEditRecipe=(recipeProperties : Partial<IRecipe>, recipeId: string)=>{
        setAllRecipes((prev:any)=>{
            return prev.map((recipe: IRecipe)=>{
                if (recipe._id === recipeId) {
                    return {
                        ...recipe,
                        recipeProperties
                    }
                }
            })
        })
    }
    const onChangeRecipe=async(recipeProperties: Partial<IRecipe> , recipeId:string)=>{
        try {
            const updateRecipe= await api.patch(`/recipes/${recipeId}` , recipeProperties)
            setAllRecipes((prev)=>{
                return prev.map((recipe: IRecipe)=>{                    
                    if (recipe._id === recipeId) {
                        console.log(updateRecipe.data);
                        console.log(recipeProperties);
                        
                        return updateRecipe.data
                    }
                    return recipe
                })
            })
        } catch (error) {
            console.log(error);
            
        }
    }

     

    return (
        <div className="h-full w-full mt-12">
            <div className="flex items-center justify-between pr-8 pl-8">
                <h2 className="text-2xl">All your recipes: </h2>
                <button className="bg-blue-900 text-white p-3 rounded-full" onClick={openModal}>Create new</button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8 pl-10 pr-10">
                {allRecipes.map((recipe: any) => (
                    <Recipe  recipe={recipe} onChangeRecipe={onChangeRecipe} openRecipeToEdit={openRecipeToEdit} deleteRecipe={deleteRecipe}/>
                ))}
            </div>
            {isEditModalOpen && <EditRecipeModal onClose={ ()=> setIsEditOpenModal(false)} onEditRecipe={onEditRecipe} recipeToEdit={recipeToEdit}/>}
            {isCreateModalOpen && <CreateRecipeModal onAddRecipe={onAddRecipe}  onClose= { ()=> setCreateIsOpenModal(false) } />}
        </div>
    );
};
