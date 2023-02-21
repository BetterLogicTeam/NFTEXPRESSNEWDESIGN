import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const isuser = useSelector((state) => state.UserAuth.isAuth);
console.log('PrivateRoutes',isuser)

    return (
        !isuser ? <Navigate to="/Login_main" /> : <Outlet />
    )
}

export default PrivateRoutes