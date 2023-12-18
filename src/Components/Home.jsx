import axios from "axios"
import { useEffect, useState } from "react"
import RenderProducts from "./RenderProducts"



const Home = ({setNotified}) => {

    const[data, setData] = useState(null)
    const[cart, setCart] = useState("")
   
    console.log(cart)
    useEffect(()=>{
        axios
        .get("https://dummyjson.com/products/")
        .then(res => {
            setData(res.data.products);
           
        })
    },[])
    return (
        <div className="sm:mt-[7rem] px-3 mt-[4rem]" >
         <div className="text-center sm:text-2xl font-semibold ">
         Hi, i am Kemish bajgain ☺️, Welcome to my shop. To order, add the items to the cart. Than we will contact you on the basis of your selection. These are the list of dummies of Products we have, Thank you for choosing us
         </div>
  
          <div className="sm:grid sm:grid-cols-2 sm:justify-items-center   gap-4  mt-10 vsm:flex vsm:justify-center vsm:items-center vsm:flex-col">
          {data?.map(prod => (
          
        <RenderProducts prod={prod} cart={cart} setCart={setCart} key={prod.id} setNotified={setNotified}/>
    ))}
          </div>
        </div>
      );
}

export default Home
