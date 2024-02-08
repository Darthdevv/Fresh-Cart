import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'
import Brands from './pages/Brands'
import Categories from './pages/Categories'
import Products from './pages/Products'
import WishList from './pages/WishList'

import './App.css'
import NotFound from './components/NotFound'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, path: "home", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "products", element: <Products /> },
        { path: "categories", element: <Categories /> },
        { path: "brands", element: <Brands /> },
        { path: "wishlist", element: <WishList /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
