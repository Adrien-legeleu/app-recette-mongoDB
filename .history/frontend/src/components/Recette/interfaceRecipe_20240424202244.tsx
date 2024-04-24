import { useEffect, useState } from "react";
import { api } from "../../config/api";
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
import { IRecipe } from "../../Types/recipes.type";
import { CreateRecipeModal } from "../CreateRecipeModal";
import { EditRecipeModal } from "../EditRecipeModal";

export const InterfaceRecipe = () => {
    const openModal = () => setIsEditOpenModal(true);
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
            console.log(recipeId);
            
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
        openModal()
    }

    const onAddRecipe=(taskProperties : IRecipe)=>{
        setAllRecipes((prev)=>{
            return [
                ...prev , 
                taskProperties
            ]
        })
    }
    const onEditRecipe = (recipeProperties: Partial<IRecipe>, recipeId: string) => {
    setAllRecipes((prev: any) => {
        return prev.map((recipe: IRecipe) => {
            if (recipe._id === recipeId) {
                return {
                    ...recipe,
                    recipeProperties,
                };
            }
            return recipe; // Ajoutez cette ligne pour gérer le cas où recipe._id ne correspond pas à recipeId
        });
    });
};


    return (
        <div className="h-full w-full mt-12">
            <div className="flex items-center justify-between pr-8 pl-8">
                <h2 className="text-2xl">All your recipes: </h2>
                <button className="bg-blue-900 text-white p-3 rounded-full" onClick={openModal}>Create new</button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8 pl-10 pr-10">
                {allRecipes.map((recipe: any) => (
                    <div key={`recipe : ${recipe._id}`} className="rounded-3xl bg-gray-100 gap-5 flex flex-col pb-5 pt-5 pr-10 pl-10 text-center"> 
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
                ))}
            </div>
            {isEditModalOpen && <EditRecipeModal onClose={ ()=> setIsEditOpenModal(false)} recipes ={allRecipes} onEditRecipe={onEditRecipe} recipeToEdit={recipeToEdit}/>}
            {isCreateModalOpen && <CreateRecipeModal onAddRecipe={onAddRecipe}  onClose= { ()=> setCreateIsOpenModal(false) } />}
        </div>
    );
};
