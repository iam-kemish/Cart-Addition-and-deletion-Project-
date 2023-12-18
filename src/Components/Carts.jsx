import React, { useContext, useEffect, useState } from 'react';
import { items } from '../Context';
import RenderProducts from './RenderProducts';

const Carts = ({setNotified}) => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(items);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  setNotified("")

  if (!cart || cart.length === 0) {
    return (
      <div className='sm:mt-[7rem] px-3 mt-[4rem]' >
        <span className=''>
         Total price: 0
        </span>
        <br />
        <span>
          No items in the cart.
        </span>
      </div>
    );
  }

  return (
    <div className='sm:mt-[7rem] px-3 mt-[4rem]' >
      <span>
        <strong>Total price: {total}$</strong>
      </span>
      <div className='sm:grid sm:grid-cols-2 sm:justify-items-center   gap-4  mt-10 vsm:flex vsm:justify-center vsm:items-center vsm:flex-col mb-2' >
        {cart.map((prod, index) => (
          <div className="" key={prod.id + index}>
            <RenderProducts prod={prod} removeBtn = {true} />
         
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
