import { useContext, useEffect, useState } from "react"
import { items } from "../Context"
import RenderProducts from "./RenderProducts"
const Carts = () => {
    const[total, setTotal] = useState(0)
    const{cart, setCart} = useContext(items)
    useEffect(()=>{
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    })
       if(!cart || cart.length === 0) {
        return (
            <div>
              <span style={{marginLeft: "5px"}}><strong>Total price: 0</strong></span><br/>
              <span style={{marginLeft: "5px"}}><strong>No items in the cart.</strong></span>
            </div>
          )
       }
       return (
        <div className="container my-3">
             <span><strong>Total price: {total}$</strong></span>
      <div className="row my-3">
      {
        cart.map(prod=> (
            <div className="col-md-4 mb-4" key={prod.id}>
                <RenderProducts prod={prod} cart={cart} setCart={setCart} />
            </div>
        ))
      }
      </div>
    </div>
       )
       
}

export default Carts
