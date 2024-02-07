import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router"

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout