import { Navigate, Outlet } from "react-router-dom";
import {useAuth} from '../context/AuthProvider'

export const ProtectRoute = () => {

    const auth = useAuth();

    return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" /> 
}
