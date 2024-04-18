export const InterfaceRecipe = ({setIsOpenModal})=>{
    const openModal=()=>setIsOpenModal(true)
    return(
        <div className="h-full w-full mt-12">
            <div className="flex items-center justify-between pr-8 pl-8">
                <h2 className="text-2xl">All your recipes: </h2>
                <button className="bg-blue-900 text-white p-3 rounded-full">Create new</button>
            </div>
        </div>
    )
}