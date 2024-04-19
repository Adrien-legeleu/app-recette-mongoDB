import { useEffect, useState } from "react";
import { api } from "../../config/api";

export const InterfaceRecipe = ({ setIsOpenModal }: any) => {
    const openModal = () => setIsOpenModal(true);

    const [allRecipes, setAllRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await api.get("/recipes");
                setAllRecipes(response.data); 
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
            <div className="grid grid-cols-5 gap-6 mt-8">
                {allRecipes.map((recipe: any) => (
                    <div key={`recipe : ${recipe.id}`} className="rounded-full bg-gray-300 pb-5 pt-5 pr-10 pl-10"> 
                        <h4>{recipe.title}</h4>
                        <p>{recipe.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
