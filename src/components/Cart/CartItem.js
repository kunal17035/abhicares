import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.itemName}>
        <p>{props.item.name}</p>
      </div>
      <div>
        <span class="badge text-bg-success">&#x20b9;{props.item.price}</span>
      </div>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-primary"
          onClick={removeItemHandler.bind(null, props.item.id)}
        >
          −
        </button>
        <button type="button" class="btn btn-primary">
          {props.item.amount}
        </button>
        <button
          type="button"
          class="btn btn-primary"
          onClick={addItemHandler.bind(null, props.item)}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
