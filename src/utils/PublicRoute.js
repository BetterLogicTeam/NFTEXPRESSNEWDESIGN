import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const PublicRoute = ({ children }) => {
    const isuser = useSelector((state) => state.UserAuth.isAuth);


    if (isuser) {
        return <Navigate to="/" />
    }
    return children

};

export default PublicRoute;