import styles from "./pricecomp.module.css";
import { Link } from "react-router-dom";

const Housecard = ({ id, img, name, cost, address, rating }) => {
  return (
    <section className={styles.housecard}>
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
            <button>Look</button>
          </Link>
        </div>
      </div>  
    </section>
  )
}

export default Housecard;