import { Header } from "../../components/Header/Header"
import { InterfaceRecipe } from "../../components/Recette/InterfaceRecipe"

export const Home=()=>{
    return(
        <div className="h-screen w-full">
            <Header/>
            <InterfaceRecipe/>
        </div>
    )
}