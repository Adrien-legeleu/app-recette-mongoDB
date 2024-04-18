import { useState } from "react"
import { Header } from "../../components/Header"
import { InterfaceRecipe, ModalRecipe } from "../../components/Recette"

export const Home=()=>{
    const [isModalOpen , setIsOpenModal] = useState(false)

    
    

    return(
        <div className="h-screen w-full">
            <Header/>
            <InterfaceRecipe setIsOpenModal={setIsOpenModal}/>
            {
                isModalOpen ? <ModalRecipe setIsOpenModal={setIsOpenModal} /> :"")
            }
        </div>
    )
}