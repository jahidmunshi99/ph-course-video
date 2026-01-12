import React from 'react'
import {UseAuth} from "../Provider/AuthProvider.jsx"
import { useNavigate } from 'react-router';


const PrivateRoute = ({children}) => {
    const navigate = useNavigate();
    const {user} = UseAuth();

  return user ? children : navigate("/");}


export default PrivateRoute