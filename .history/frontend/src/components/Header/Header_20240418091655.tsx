import LogoutIcon from '@mui/icons-material/Logout';
import { useUserContext } from '../../contexts/userContext';
export const Header=()=>{
    const {onLogout} = useUserContext()
    return(
        <div className="fixed w-full h-16 bg-blue-800 flex items-center justify-between pr-4 pl-4">
            <h1 className='text-4xl text-white text-center'>APP RECETTE</h1>
            <div onClick={onLogout}>
                <LogoutIcon sx={{ color:"white"}}/>
            </div>
        </div>
    )
}