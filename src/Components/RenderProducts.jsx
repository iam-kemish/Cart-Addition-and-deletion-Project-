import { useContext, useState } from 'react';
import { items } from '../Context';

const RenderProducts = ({ prod }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const toggleDesc = () => {
    setShowFullDesc(!showFullDesc);
  };

  const { cart, setCart } = useContext(items);

 const handleAddToCart = () =>{
  if(!cart.some((item) => item.id === prod.id)) {
    setCart((prevCart) => [...prevCart, prod])
  }
 } 
                                     
 return (
   <div>
     <div className="card mt-5 p-3" style={{ width: '18rem', height: '48rem', border: '0.5px blue' }}>
       <img src={prod.thumbnail} className="card-img-top" alt="..." />
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
    <button className='btn btn-secondary' disabled>Already in your cart</button>
  
    </>
  ) : <button className='btn btn-success' onClick={handleAddToCart}>Add to cart</button>}
       </div>
     </div>
   </div>
 );
  
  };
 


export default RenderProducts;
