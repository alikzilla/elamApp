import styles from "./houseCard.module.css";
import { Link } from "react-router-dom";

const HouseCard = ({ house }) => {
  return (
    <section className={styles.houseCard}>
      <img src={house.img} alt={house.name} className={styles.houseImage} />
      <div className={styles.houseInfo}>
        <h1>{house.name}</h1>
        <p>{house.rating}</p>
        <p>{house.cost}</p>
        <Link to={`/houses/${house.id}`}>
          <button>Look</button>
        </Link>
      </div>
    </section>
  )
}

export default HouseCard;