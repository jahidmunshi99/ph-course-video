import {Routes, Route} from "react-router"
import Home from '../Pages/Home'

import { AuthProvider } from "../Provider/AuthProvider"
// import Dashboard from "../Pages/Dashboard/Dashboard"
import Admindashboard from "../Pages/Dashboard/AdminDashboard/Admindashboard"


const AllRoutes = () => {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/dashboard" element={<Admindashboard />} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default AllRoutes