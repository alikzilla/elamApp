import React, { useEffect } from 'react';
import styles from "./houseItemPage.module.css";
import { useParams } from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
// import { houses } from "../../../../store";
import HouseCard from "./components/HouseCard";

function HouseItemPage() {
  
  const { houseId } = useParams();
  const house = houses.find((item) => houseId == item.id);
  const anotherHouses = houses.filter((item) => houseId != item.id);

  useEffect(() => {
    console.log(houses);
    console.log(house + "ldsll");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className={styles.housePage}>
      <div className={styles.houseBlock}>
        <ImageGallery items={house.images} additionalClass={styles.imageGallery} showPlayButton={false} showBullets={true} />
        <div className={styles.houseInfo}>
          <h1>{house.name}</h1>
          <p>Address: {house.address}</p>
          <p>Cost: {house.cost}</p>
          <p>Rating: {house.rating}/5</p>
          <p>Description: {house.description}</p>
        </div>
      </div>
      <div className={styles.sidebar}>
        <h1 style={{fontSize: "25px"}}>Another houses you would like</h1>
        <div className={styles.anotherHousesList}>
          {anotherHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HouseItemPage;
