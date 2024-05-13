import styles from "./houseCard.module.css";
import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";

const HouseCard = ({ house }) => {
  return (
    <section className={styles.houseCard}>
      <img src={house.img} alt={house.name} className={styles.houseImage} />
      <div className={styles.houseInfo}>
        <h1>{house.name}</h1>
        <p>Rating: {house.rating}</p>
        <p>{house.cost}</p>
        <Link to={`/houses/${house.id}`}>
          <Button height={30}>Look</Button>
        </Link>
      </div>
    </section>
  )
}

export default HouseCard;