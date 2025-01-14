import React from "react";
import Cart from "../components/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage: React.FC = () => {
  return (
    <div>
      <Cart />
      <ToastContainer />
    </div>
  );
};

export default CartPage;
