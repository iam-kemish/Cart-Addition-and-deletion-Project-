import React from "react";
import { Link } from "react-router-dom";

const Heading = ({ notified }) => {
  return (
    <div>
      {/* flex justify-start bg-red-500 text-stone-50 px-4 py-4  */}
      <ul className="flex justify-start bg-red-500 text-stone-50 px-4 py-4 sm:py-8 fixed top-0 w-full sm:text-2xl">
        <li>
          <Link to="/" className="ml-4 hover:text-blue-950 active:text-red-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="ml-4 hover:text-blue-950 active:text-red-600">
            Carts
          </Link>
        </li>
        <li>
          <p>{notified}</p>
        </li>
      </ul>
    </div>
  );
};

export default Heading;
