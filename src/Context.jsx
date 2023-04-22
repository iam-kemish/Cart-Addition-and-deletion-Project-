import  { useState } from 'react'
import { createContext } from 'react';
  export const items = createContext();

const Context = ({children}) => {
    const[cart, setCart] = useState([])
  return (
  <items.Provider value={{cart, setCart}}>
  {children}
  </items.Provider>
  )
}

export default Context
