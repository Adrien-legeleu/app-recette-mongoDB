import { useEffect, useState } from "react";
import { api } from "../../config/api";

export const InterfaceRecipe = ({ setIsOpenModal }: any) => {
    const openModal = () => setIsOpenModal(true);

    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await api.get("/recipes");
                setAllRecipes(response.data); // Assuming response is in JSON format with data property containing the recipes
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className="h-full w-full mt-12">
            <div className="flex items-center justify-between pr-8 pl-8">
                <h2 className="text-2xl">All your recipes: </h2>
                <button className="bg-blue-900 text-white p-3 rounded-full" onClick={openModal}>Create new</button>
            </div>
            <div>
                {Array.isArray(allRecipes) && allRecipes.map((recipe: any) => (
                    <div key={recipe.id}> {/* Assuming each recipe has an 'id' property */}
                        <h4>{recipe.title}</h4>
                        <p>{recipe.description}</p> {/* Assuming 'description' is a string */}
                    </div>
                ))}
            </div>
        </div>
    );
};
