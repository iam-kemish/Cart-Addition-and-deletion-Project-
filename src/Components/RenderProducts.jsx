import  { useContext, useState } from "react";
import { items } from "../Context";

const RenderProducts = ({ prod, removeBtn, setNotified }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const toggleDesc = () => {
    setShowFullDesc(!showFullDesc);
  };

  const Capitalise = (str) => {
    if (typeof str !== "string" || str.length === 0) {
      return str;
    } else {
      const sentence = str.split(" ");
      const FinalWords = sentence.map((letter) => {
        return letter.charAt(0).toUpperCase() + letter.slice(1);
      });
      return FinalWords.join(" ");
    }
  };
  const { cart, setCart } = useContext(items);

  const message = <p>&larr; View your products here.</p>;
  const handleAddToCart = () => {
    if (!cart.some((item) => item.id === prod.id)) {
      let updatedCart = [...cart, prod];
      setCart(updatedCart);
      localStorage.setItem("key", JSON.stringify(updatedCart));
      setNotified(message);
    }
  };
  const handleRemove = (prod) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== prod.id));
  };
  return (
    <div className="max-w-[21rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
      <img
        src={prod.thumbnail}
        className="rounded-t-lg h-60 w-full"
        alt="Product Thumbnail"
      />

      <div className="text-center">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {Capitalise(prod.title)}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Brand: {prod.brand}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Description:{" "}
          {showFullDesc
            ? Capitalise(prod.description)
            : Capitalise(prod.description.slice(0, 43))}
          {prod.description && prod.description.length > 43 && (
            <button
              onClick={toggleDesc}
              className="bg-blue-500 hover:bg-blue-700 text-white text-[0.8rem] font-bold py-1 px-2 rounded-full"
            >
              {showFullDesc ? "Read less..." : " ...Read more"}
            </button>
          )}
        </p>
        <p>Discount %: {prod.discountPercentage}</p>
        <p>Stock available: {prod.stock}</p>
        <p>Price: {prod.price}$</p>

        {cart.some((item) => item.id === prod.id) ? (
          <>
            {removeBtn ? (
              <button
                onClick={() => handleRemove(prod)}
                className="bg-red-800 hover:bg-green-800 w-full text-white font-bold py-2 px-4 border border-blue-700 rounded"
              >
                Remove from cart
              </button>
            ) : (
              <button className="bg-green-800 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed w-full">
                Added in your cart
              </button>
            )}
          </>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-green-800 hover:bg-red-800 w-full text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default RenderProducts;
