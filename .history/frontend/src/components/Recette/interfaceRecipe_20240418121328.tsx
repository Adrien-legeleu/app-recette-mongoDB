import { useEffect, useState } from "react"
import { api } from "../../config/api"

export const InterfaceRecipe = ({setIsOpenModal}:any)=>{
    const openModal=()=>setIsOpenModal(true)

    const [allRecipes , setAllRecipes] useState([])

    useEffect(()=>{
        const recipe= await api.get("/recipes")
        setAllRecipes(recipe)
    },[])

    return(
        <div className="h-full w-full mt-12">
            <div className="flex items-center justify-between pr-8 pl-8">
                <h2 className="text-2xl">All your recipes: </h2>
                <button className="bg-blue-900 text-white p-3 rounded-full" onClick={openModal}>Create new</button>
            </div>
            <div>

            </div>
        </div>
    )
}