import { createContext, useState } from "react";


export const StoreContext = createContext(0);

// eslint-disable-next-line react/prop-types
export default function StoreContextProvider({ children }) {
  const [counter, setCounter] = useState(0)
  return (
    <StoreContext.Provider value={{ counter, setCounter }}>
      {children}
    </StoreContext.Provider>
  )
}