import { useState } from "react"
import { Header } from "../../components/Header"
import { InterfaceRecipe, ModalRecipe } from "../../components/Recette"
import { IRecipe } from "../../Types/recipes.type"

export const Home=()=>{
    const [isModalOpen , setIsOpenModal] = useState(false)
    const [RecipeToEdit , setRecipeToEdit] = useState<IRecipe | null>(null)

    
    

    return(
        <div className="h-screen w-full">
            <Header/>
            <InterfaceRecipe setIsOpenModal={setIsOpenModal}/>
            {isModalOpen && <ModalRecipe setIsOpenModal={setIsOpenModal} />}
        </div>
    )
}