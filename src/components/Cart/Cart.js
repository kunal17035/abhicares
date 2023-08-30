import React, { useContext } from "react";
// import CartIcon from "./CartIcon";
import CartItem from "./CartItem";
import CartIcon from "../../assets/empty-cart.png";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  if (cartCtx.items.length === 0) {
    return (
      <React.Fragment>
        <div className={styles.cartContainer}>
          <div className={styles.cartIcon}>
            <img src={CartIcon} alt="empty-cart-icon" />
          </div>

          <div>
            <p className={styles.center}>No items in cart.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
  return (
    <div className={styles.cartItemContainer}>
      <div>
        {cartCtx.items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
