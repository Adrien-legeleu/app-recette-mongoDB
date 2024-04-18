import { useState } from "react"
import { Header } from "../../components/Header"
import { InterfaceRecipe, ModalRecipe } from "../../components/Recette"

export const Home=()=>{
    const [isModalOpen , setIsOpenModal] = useState(false)

    const open

    return(
        <div className="h-screen w-full">
            <Header/>
            <InterfaceRecipe/>
            <ModalRecipe/>
        </div>
    )
}