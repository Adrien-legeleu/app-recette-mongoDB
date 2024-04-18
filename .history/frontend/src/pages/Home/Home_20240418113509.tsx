import { Header } from "../../components/Header"
import { InterfaceRecipe } from "../../components/Recette"

export const Home=()=>{
    return(
        <div className="h-screen w-full">
            <Header/>
            <InterfaceRecipe/>
        </div>
    )
}