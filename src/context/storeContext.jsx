import axios from "axios";
import { createContext, useState } from "react";
import { baseUrl } from "../api/api";


export const StoreContext = createContext(0);

async function addToCart(productId) {
  const { data } = await axios.post(baseUrl + '/api/v1/cart/', { productId }, {
    headers: {
      token: localStorage.getItem('token')
    }
  })
  return data;
}

async function getCart() {
  return await axios.get(baseUrl + "/api/v1/cart/", {
    headers: {
      token: localStorage.getItem("token"),
    },
  }).then(({ data }) => data).catch(err => err);
}

async function clearCart() {
  return await axios.delete(baseUrl + "/api/v1/cart/", {
    headers: {
      token: localStorage.getItem("token"),
    },
  }).then(({data})=>data).catch(err => err);
}

async function removeFromCart(productId) {
  return await axios.delete(baseUrl + '/api/v1/cart/' + productId, {
    headers: {
      token: localStorage.getItem("token"),
    },
  }).then(({data})=>data).catch(err => err);
}

async function updateProductQuantity(productId, count) {
  return await axios.put(baseUrl + "/api/v1/cart/" + productId,{count}, {
    headers: {
      token: localStorage.getItem("token"),
    },
  }).then(({data})=>data).catch(err => err);
}

async function checkoutSession(cartId, shippingAddress) {
  return await axios.post(baseUrl + '/api/v1/orders/checkout-session/' + cartId, { shippingAddress }, {
    headers: {
      token: localStorage.getItem("token"),
    },
  }).then(({data})=>data).catch(err => err);
}

// eslint-disable-next-line react/prop-types
export default function StoreContextProvider({ children }) {
  const [counter, setCounter] = useState(0)
  const [total, setTotal] = useState(0)
  return (
    <StoreContext.Provider value={{ counter, setCounter, addToCart, getCart, total, setTotal, removeFromCart, updateProductQuantity, clearCart, checkoutSession }}>
      {children}
    </StoreContext.Provider>
  )
}