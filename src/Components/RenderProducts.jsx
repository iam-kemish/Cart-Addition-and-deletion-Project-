import  { useContext } from 'react'
import { items } from '../Context'

// eslint-disable-next-line react/prop-types
const RenderProducts = ({prod}) => {
   const { cart, setCart} = useContext(items)
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
  <img src={prod.thumbnail} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"><strong>Title:</strong> {prod.title}</h5>
    <p className="card-text"><strong>Brand:</strong> {prod.brand}</p>
    <p className="card-text"><strong>Description:</strong> {prod.description}</p>
    <p className="card-text"><strong>Discount %:</strong> {prod.discountPercentage}</p>
    <p className="card-text"><strong>Stock available: </strong>{prod.stock}</p>
    <p className="card-text"><strong>Price:</strong> {prod.price}</p>
    {cart.includes(prod)? (
       <button className='btn btn-danger' style={{width: "100%"}} onClick={() => setCart(cart.filter(c => c.id !== prod.id))}>Remove from cart</button>
    ): (
<button className='btn btn-primary' style={{width: "100%"}} onClick={()=> setCart([...cart, prod])}>Add to cart</button>
  
    )}
   
  </div>
</div>
    </div>
  )
}

export default RenderProducts
