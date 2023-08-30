import React from "react";
import { Link } from "react-router-dom";
import AppRepairImg from "../../assets/mainCategories/Appliance Repair.jpeg";
import HomePaintingImg from "../../assets/mainCategories/HomePainting.jpg";
import CleaningPestImg from "../../assets/mainCategories/Cleaning.jpg";
import DisinfectionImg from "../../assets/mainCategories/disinfectant.jpg";
import HomeRepairImg from "../../assets/mainCategories/HomeService.jpg";
import styles from "./HomeServices.module.css";
const HomeServices = () => {
  const HOME_SERVICES = [
    {
      title: "Appliance Repair",
      key: "hs1",
      img: AppRepairImg,
    },
    {
      title: "Home Painting",
      key: "hs2",
      img: HomePaintingImg,
    },
    {
      title: "Cleaning & Pest",
      key: "hs3",
      img: CleaningPestImg,
    },
    {
      title: "Disinfection",
      key: "hs4",
      img: DisinfectionImg,
    },
    {
      title: "Home Repairs",
      key: "hs5",
      img: HomeRepairImg,
    },
  ];
  return (
    <div className={styles["home-services-container"]}>
      <h1 className={styles.center}>Home Services</h1>
      <div className={styles["home-services"]}>
        {HOME_SERVICES.map((service) => (
          // <Link key={service.key} className={styles.link}>
          <div className={styles.link}>
            <img
              src={service.img}
              alt={service.title}
              className={styles.serviceImg}
            />
            <p className={styles.center}>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
