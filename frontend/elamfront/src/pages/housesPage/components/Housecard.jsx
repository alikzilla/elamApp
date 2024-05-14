import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./pricecomp.module.css";
import Button from "../../../components/button/Button";

const Housecard = ({ id, img, name, cost, address, rating }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(true);
  };

  return (
    <section className={`${styles.housecard} ${isSelected ? styles.selected : ''}`}>
      <img src={img} alt={"house_" + img} className={styles.houseImage} />
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <h1>{name}</h1>
          <p>Cost: {cost}</p>
          <p>Address: {address}</p>
          <p>Rating: {rating}/5</p>
        </div>
        <div className={styles.controlContent}>
          <Link to={`/houses/${id}`}>
            <Button onClick={handleSelect}>Look</Button>
          </Link>
        </div>
      </div>  
    </section>
  )
}

export default Housecard;
