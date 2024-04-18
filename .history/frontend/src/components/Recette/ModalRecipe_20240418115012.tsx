export const ModalRecipe=()=>{
    return(
        <div className="h-screen w-full bg-[#00000070] flex items-center justify-center z-10">
            <div className="bg-white rounded-3xl p-5 flex flex-col">
                <h3 className="text-center text-xl">Your new recipe</h3>
                <input type="text" name="title" id="title" placeholder="title" />
                <input type="text" name="text" id="text" placeholder="text" />
            </div>
        </div>
    )
}