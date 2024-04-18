export const ModalRecipe=()=>{
    return(
        <div className="h-screen w-full bg-[#00000070] flex items-center justify-center  absolute top-0 left-0">
            <div className="bg-white rounded-3xl p-5 flex flex-col">
                <h3 className="text-center text-xl">Your new recipe</h3>
                <div className="flex flex-col gap-4">
                    <input type="text" name="title" id="title" placeholder="title" />
                <input type="text" name="text" id="text" placeholder="text" />
                </div>
                <div className="flex items-center justify-end gap-4">
                    <button className="bg-red-400 text-white p-3 pl-5 pr-5rounded-full">close</button>
                    <button className="bg-blue-700 text-white p-3 pr-5 pl-5 rounded-full">save</button>
                </div>
            </div>
        </div>
    )
}