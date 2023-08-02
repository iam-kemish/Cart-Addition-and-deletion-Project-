import { useContext, useEffect, useState } from 'react';
import { items } from '../Context';
import RenderProducts from './RenderProducts';

const Carts = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = useContext(items);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="mt-5 text-center">
        <span>
          <strong>Total price: 0</strong>
        </span>
        <br />
        <span>
          <strong>No items in the cart.</strong>
        </span>
      </div>
    );
  }

  return (
    <div className="container">
      <span>
        <strong>Total price: {total}$</strong>
      </span>
      <div className="row my-3">
        {cart.map((prod, index) => (
          <div className="col-md-4 mb-4" key={prod.id + index}>
            <RenderProducts prod={prod} onRemove={handleRemoveFromCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
