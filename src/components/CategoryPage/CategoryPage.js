import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../CategoryPage/ItemCard";
import Cart from "../Cart/Cart";

import CartContext from "../../store/cart-context";

import styles from "./CategoryPage.module.css";
const CategoryPage = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h4 className={styles.center}>Select a service</h4>
        <div>
          <img></img>
          <p>Frequently booked</p>
        </div>
      </div>
      <div className={styles.middleContainer}>
        <ItemCard />
      </div>
      <div className={styles.rightContainer}>
        <Cart />
        <div className={styles.offersContainer}>
          <p className={styles.center}>Offers will be listed here.</p>
        </div>

        {cartCtx.items.length > 0 && (
          <div>
            <div class="d-flex justify-content-around align-items-center">
              <h6>Sub-Total:</h6>
              <h3 class="m-0"> &#x20b9; {cartCtx.totalAmount}</h3>
            </div>
            <div class="text-center">
              <button className={`btn btn-success ${styles["proceed-btn"]}`}>
                Proceed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default CategoryPage;
