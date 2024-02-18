import axios from "axios";
import { createContext, useState } from "react";
import { baseUrl } from "../api/api";


export const StoreContext = createContext(0);

async function addToCart(productId) {
  const { data } = await axios.post(baseUrl + '/api/v1/cart', { productId }, {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  console.log(data)
  return data;
}

// eslint-disable-next-line react/prop-types
export default function StoreContextProvider({ children }) {
  const [counter, setCounter] = useState(0)
  return (
    <StoreContext.Provider value={{ counter, setCounter, addToCart }}>
      {children}
    </StoreContext.Provider>
  )
}