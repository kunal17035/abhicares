import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import CartContext from "../../store/cart-context";

import SwitchImg from "../../assets/category/swtich.jpg";
import FanImg from "../../assets/category/fan.jpg";
import BulbImg from "../../assets/category/bulb.jpg";

import classes from "./ItemCard.module.css";

const ITEMS = [
  {
    id: "i1",
    name: "Switch Replacement",
    rating: "4.85 (15K reviews)",
    price: 300,
    amount: 1,
    offers: "",
    description:
      "These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky. They can be located right next to or underneath product titles and product images. They can be scannable selling points or have strong readability.",
    img: SwitchImg,
  },
  {
    id: "i2",
    name: "Fan Repair",
    rating: "4.00 (10K reviews)",
    amount: 1,
    price: 100,
    offers: "",
    description:
      "These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky. They can be located right next to or underneath product titles and product images. They can be scannable selling points or have strong readability.",
    img: FanImg,
  },
  {
    id: "i3",
    name: "Bulb Repair",
    rating: "3.85 (20K reviews)",
    amount: 1,
    price: 150,
    offers: "",
    description:
      "These product details can be one sentence, a short paragraph or bulleted. They can be serious, funny or quirky. They can be located right next to or underneath product titles and product images. They can be scannable selling points or have strong readability.",
    img: BulbImg,
  },
];

// const cId = useParams().categoryId;
// console.log("cid", cId);
// "/:categoryId/categories/:serviceId/details"
// http://localhost:3000/c1/categories/c1/categories/i1/details

const ItemCard = () => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div className={classes["product-list"]}>
      {ITEMS.map((item) => (
        <div className={classes.wrapper} key={item.id}>
          <div className={classes["product-img"]}>
            <img src={item.img} height="420" width="327" alt="" />
          </div>
          <div className={classes["product-info"]}>
            <div className={classes["product-text"]}>
              <h1>{item.name}</h1>
              <h2>{item.rating}</h2>
              <p>{item.description}</p>
            </div>
            <div className={classes["product-price-btn"]}>
              <p>
                <span className={classes.span}>&#x20b9;{item.price}</span>
              </p>
              <button
                type="button"
                onClick={addItemHandler.bind(null, item)}
                className={classes["add-to-cart-btn"]}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;

{
  /* return (
   <React.Fragment>
     <h3 className={styles.center}>Frequently Booked</h3>
     {ITEMS.map((item) => (
      <div className={styles.itemCard} key={item.id}>
        <Link to={`${item.id}/details`} className={styles.categoryInfo}>
          <h4 className={styles.name}>{item.name}</h4>
          <p>{item.rating}</p>
          <p>&#x20b9;{item.price}</p>
          <p>{item.offers}</p>
          <ul>
            {item.description.map((des) => (
              <li>{des}</li>
            ))}
          </ul>
        </Link>
        <div className={styles.imgDiv}>
          <img src={item.img} alt="Switch" className={styles.boxImg} />
        </div>
        <AddBtn item={item} />
      </div>
    ))}
  </React.Fragment>
); */
}
