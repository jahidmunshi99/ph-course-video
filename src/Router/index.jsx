import {Routes, Route} from "react-router"
import Home from '../Pages/Home'

import { AuthProvider } from "../Provider/AuthProvider"
import Dashboard from "../Pages/Dashboard/Dashboard"


const AllRoutes = () => {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default AllRoutes