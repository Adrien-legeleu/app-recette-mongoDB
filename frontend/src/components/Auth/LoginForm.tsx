import { FormControl, TextField } from "@mui/material"


export const LoginForm = ()=>{
    return (
        <FormControl defaultValue="" required fullWidth>
            <TextField type="password" margin="normal" required fullWidth id=" email" aria-label="email" name="email" autoComplete="email" autoFocus/>
            <TextField margin="normal" required fullWidth id=" password" aria-label="password" name="password" autoComplete="password" autoFocus/>
        </FormControl>
)}