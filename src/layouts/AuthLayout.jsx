import AuthNavbar from "../components/AuthNavbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router"

function AuthLayout() {
  return (
    <>
      <AuthNavbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default AuthLayout