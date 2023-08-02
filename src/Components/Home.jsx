import axios from "axios"
import { useEffect, useState } from "react"
import RenderProducts from "./RenderProducts"



const Home = () => {

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
        <div className="container mt-5">
            <span style={{color: "#000080", marginLeft: "0px", fontFamily: "Lucida Console"}}><strong>One your phone look out for three lines icon on the top to get access option for different page,i.e. cart.</strong>  Hi, i am Kemish bajgain ☺️, Welcome to my shop. To order, add the items to the cart. Than we will contact you on the basis of your selection. These are the list of dummies of Products we have, Thank you for choosing us.</span>
          <div className="row my-3 my-3">
          {data?.map(prod => (
      <div className="col-md-4 mb-4" key={prod.id}>
        <RenderProducts prod={prod} cart={cart} setCart={setCart} />
      </div>
    ))}
          </div>
        </div>
      );
}

export default Home
