import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const isuser = useSelector((state) => state.UserAuth.isAuth);
   

    return (
        !isuser ? <Navigate to="/login" /> : <Outlet />
    )
}

export default PrivateRoutes