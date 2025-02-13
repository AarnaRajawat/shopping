import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/slices/cartSlice";
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
          <div>
            <Button
              variant="outlined"
              onClick={() => dispatch(decreaseQuantity(item.id))}
              disabled={item.quantity === 1}
              style={{ marginRight: "10px" }}
            >
              -
            </Button>
            <Button
              variant="outlined"
              onClick={() => dispatch(increaseQuantity(item.id))}
              style={{ marginRight: "10px" }}
            >
              +
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
      <Typography variant="h5">Total Amount: ${totalAmount.toFixed(2)}</Typography>
    </div>
  );
};

export default Cart;