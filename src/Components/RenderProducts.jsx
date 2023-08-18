import { useContext, useState } from 'react';
import { items } from '../Context';

const RenderProducts = ({ prod, removeBtn  }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const toggleDesc = () => {
    setShowFullDesc(!showFullDesc);
  };

  const { cart, setCart } = useContext(items);
   
 const handleAddToCart = () =>{
  if(!cart.some((item) => item.id === prod.id)) {
    let updatedCart = [...cart, prod]
    setCart(updatedCart)
    localStorage.setItem("key", JSON.stringify(updatedCart))
   
  }
 } 
 const handleRemove = (prod) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== prod.id))
};                                 
 return (
   <div>
     <div className="card mt-5 p-3" style={{ width: '18rem', height: '48rem', border: '0.5px blue' }}>
      
       <img src={prod.thumbnail} style={{ height: "10rem" }} className="card-img-top" alt="Product Thumbnail" />

       <div className="card-body">
         <h5 className="card-title">
           <strong>Title:</strong> {prod.title}
         </h5>
         <p className="card-text">
           <strong>Brand:</strong> {prod.brand}
         </p>
         <p className="card-text">
           <strong>Description:</strong> {showFullDesc ? prod.description : prod.description.slice(0, 43)}
           {prod.description && prod.description.length > 43 && (
             <button className="btn btn-primary btn-sm" onClick={toggleDesc}>
               {showFullDesc ? ' ...Read less' : ' ...Read more'}
             </button>
           )}
         </p>
         <p className="card-text">
           <strong>Discount %:</strong> {prod.discountPercentage}
         </p>
         <p className="card-text">
           <strong>Stock available: </strong>
           {prod.stock}
         </p>
         <p className="card-text">
           <strong>Price:</strong> {prod.price}$
         </p>
       
  {cart.some((item) => item.id === prod.id) ? (
   <>
   
    {
      removeBtn? (
        <button className='btn btn-danger' onClick={() => handleRemove(prod)}>Remove from cart</button>
      ) : (  <button className='btn btn-secondary' disabled>Already in your cart</button>)
    }
    </>
  ) : <button className='btn btn-success' onClick={handleAddToCart}>Add to cart</button>}
       </div>
     </div>
   </div>
 );
  
  };
 


export default RenderProducts;
