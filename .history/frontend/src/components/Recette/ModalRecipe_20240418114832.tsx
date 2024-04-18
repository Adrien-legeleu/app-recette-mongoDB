export const ModalRecipe=()=>{
    return(
        <div className="h-screen w-full bg-[#00000070]">
            <div className="bg-white rounded-3xl p-5">
                <h3>Your new recipe</h3>
                <input type="text" name="title" id="title" placeholder="title" />
                <input type="text" name="text" id="text" placeholder="text" />
            </div>
        </div>
    )
}