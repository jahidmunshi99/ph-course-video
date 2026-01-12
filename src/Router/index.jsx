import {Routes, Route} from "react-router"
import Home from '../Pages/Home'

import { AuthProvider } from "../Provider/AuthProvider"
// import Dashboard from "../Pages/Dashboard/Dashboard"
// import Admindashboard from "../Pages/Dashboard/AdminDashboard/Admindashboard"
import PrivateRoute from "./PrivateRoute"
// import AddVideoModal from "../Pages/Dashboard/AddVideoModal"
import Dashboard from "../Pages/Dashboard/Admin/Dashboard"
import MainContent from "../Pages/Dashboard/Admin/MainContent"


const AllRoutes = () => {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="videos" element={<MainContent />} />
          </Route>
        </Route>
      </Routes> 
    </AuthProvider>
    </>
  )
}

export default AllRoutes