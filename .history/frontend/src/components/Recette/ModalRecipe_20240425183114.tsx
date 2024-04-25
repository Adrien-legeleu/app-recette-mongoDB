import { useState } from "react";
import { IRecipe } from "../../Types/recipes.type";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface IRecipeProps {
    title:string;
    initialRecipeData?: Partial<IRecipe>;
    onClose: ()=> void;
    onSaveRecipe: (recipeData : Partial<IRecipe>)=> Promise<void>
    params: {
        description : boolean;
        title: boolean;
        status?: boolean
    }
}

export const ModalRecipe=({title , initialRecipeData , onClose , onSaveRecipe , params} : IRecipeProps)=>{

    const [recipeData , setRecipeData ] = useState({
        description: initialRecipeData?.description || "",
        title : initialRecipeData?.title || "",
        status : initialRecipeData?.status || "in progress" ,
    })

    const onChangeRecipeDataValue = (key:string , value:string)=>{
        setRecipeData((prev)=>({
            ...prev,
            [key]:value
        }))
    }

    const handleSaveRecipe= async()=>{
        try {
            onSaveRecipe(recipeData)
            onClose()           
            
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="h-screen w-full bg-[#00000070] flex items-center justify-center  absolute top-0 left-0">
            <div className="bg-white rounded-3xl p-5 flex flex-col gap-8 w-1/2">
                <h3 className="text-center text-xl">{title}</h3>
                <div className="flex flex-col gap-4">
                     {
                        Object.entries(params).map(([key, value]) => {
                            if (key === '_id' || !value || !(key in recipeData)) return null;
                            const fieldTitle = key[0].toUpperCase() + key.slice(1);
                            const valueData = taskData[key as keyof typeof taskData];
                            console.log(valueData);
                            
                            if (key==="status") {
                                return(
                                    <FormControl>
                                        <InputLabel id="status-task-label">{fieldTitle}></InputLabel>
                                        <Select labelId="status-task-label"
                                            id="status-task-select"
                                            value={valueData}
                                            onChange={(e) => onChangeRecipeDataValue(key, e.target.value)}
                                            label={fieldTitle}>
                                            <MenuItem value={"in progress"} >In Progress</MenuItem>
                                            <MenuItem value={"done"}>Done</MenuItem>
                                        </Select>
                                    </FormControl>
                                )
                            }
                            return (
                                <div>
                                    <TextField
                                    key={key}
                                    margin="none"
                                    required
                                    fullWidth
                                    variant='standard'
                                    name={'paramTitle'}
                                    autoComplete={'paramTitle'}
                                    autoFocus
                                    value={valueData}
                                    onChange={(e) => onChangeTaskDataValue(key, e.target.value)}
                                    label={fieldTitle}
                                />
                                <TextField
                                    key={key}
                                    margin="none"
                                    required
                                    fullWidth
                                    variant='standard'
                                    name={'paramTitle'}
                                    autoComplete={'paramTitle'}
                                    autoFocus
                                    value={valueData}
                                    onChange={(e) => onChangeTaskDataValue(key, e.target.value)}
                                    label={fieldTitle}
                                />
                                </div>
                            )

                        })
                    }
                </div>
                <div className="flex items-center justify-end gap-4">
                    <button className="bg-red-400 text-white p-2 pl-6 pr-6 rounded-full " onClick={onClose} >close</button>
                    <button className="bg-blue-700 text-white p-2 pr-6 pl-6 rounded-full"  onClick={handleSaveRecipe} >save</button>
                </div>
            </div>
        </div>
    )
}

