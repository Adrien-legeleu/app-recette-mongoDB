import { FormControl, TextField } from "@mui/material"

export const RegisterForm=()=>{
    return(
            <FormControl style={{ gap : "10px"}} fullWidth>
                <TextField type="text" name="username" id="username" fullWidth required/>
                <TextField type="email" name="email" id="email" fullWidth required autoComplete="email" autoFocus/>
                <TextField type="password" name="password" id="password" fullWidth required autoComplete="password"/>
            </FormControl>
    )
}