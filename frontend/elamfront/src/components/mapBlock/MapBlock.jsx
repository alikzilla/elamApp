import styles from "./mapBlock.module.css";
import Map from "./components/Map";

const MapBlock = ({}) => {
  return (
    <section className={styles.mapBlock}>
      <h1>Interactive Map with safe houses</h1>
      <div className={styles.mapWrapper}>
        <Map />
      </div>
    </section>
  );
}

export default MapBlock;