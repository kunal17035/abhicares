import React from "react";
import { Link } from "react-router-dom";

import styles from "./BestOffers.module.css";
const BestOffers = () => {
  const BEST_OFFERS = [
    {
      title: "Salon Prime For kids and Mens",
      key: "bo1",
      text: "Haircut at 199",
    },
    {
      title: "Salon Prime",
      key: "bo2",
      text: "Upto 50% off",
    },
    {
      title: "Massage For Men",
      key: "bo3",
      text: "Relaxing therapies starting at 499",
    },
    {
      title: "Bathroom and Kitchen cleaning",
      key: "bo4",
      text: "",
    },
  ];

  return (
    <div className={styles["bestoffer-container"]}>
      <div>
        <h2 className={styles.center}>Best Offers</h2>
        <h6 className={styles.center}>
          Hygienic & single-use products | low-contact services
        </h6>
      </div>

      <div className={styles.parentContainer}>
        {BEST_OFFERS.map((offer) => (
          <div className={styles["offer-box"]}>
            <Link key={offer.key}>
              {/* <img src="" alt="demo" /> */}
              <h5>{offer.title}</h5>
              <p>{offer.text}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOffers;
