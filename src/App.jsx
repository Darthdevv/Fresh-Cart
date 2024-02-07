import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import './App.css'

function App() {

  const router = createBrowserRouter([
    {
    path: '/',
    element: <MainLayout />,
    children: [
      {index: true, path: 'home' , element: <Home/>},
      {path: 'cart' , element: <Cart/>},
      {path: 'products' , element: <Products/>},
      {path: 'categries' , element: <Categories/>},
      {path: 'brand' , element: <Brand/>},
      {path: 'wishlist' , element: <WishList/>},
    ]
    },
    {
      path: '/', element: <AuthLayout />, children: [
        {path: 'login', element:<Login/>},
        {path: 'register', element:<Register/>},
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
