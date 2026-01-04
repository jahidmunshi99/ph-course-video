import {Routes, Route} from "react-router"
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'


const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default AllRoutes