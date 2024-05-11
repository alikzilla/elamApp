import styles from "./pricecomp.module.css";

const Housecard = ({ img, name, cost, address, rating }) => {
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
          <button>Look</button>
        </div>
      </div>  
    </section>
  )
}

export default Housecard;