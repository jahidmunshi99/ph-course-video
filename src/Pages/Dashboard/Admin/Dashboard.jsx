import Sidebar  from "../Admin/Sidebar"
import { Outlet, Route, Routes } from "react-router"



const Dashboard = () => {
  return (
    <div class="bg-gray-100 min-h-screen flex">
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default Dashboard