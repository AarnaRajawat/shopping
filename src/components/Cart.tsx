import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart } from "../redux/slices/cartSlice";
import { Button, Typography } from "@mui/material";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <Typography variant="h4">Shopping Cart</Typography>
      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: "15px" }}>
          <Typography>{item.title}</Typography>
          <Typography>Price: ${item.price}</Typography>
          <Typography>Quantity: {item.quantity}</Typography>
          <Button variant="outlined" onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </Button>
        </div>
      ))}
      <Typography variant="h5">Total Amount: ${totalAmount}</Typography>
    </div>
  );
};

export default Cart;
