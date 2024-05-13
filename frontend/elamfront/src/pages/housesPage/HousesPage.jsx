import styles from "./housesPage.module.css";
import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Housecard from "./components/Housecard";
import { houses } from "../../store";
import { useState } from "react";

const HousesPage = ({}) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  const filterHouses = () => {
    if (!searchInput.trim()) {
      return houses;
    }
    return houses.filter(house => house.name.toLowerCase().includes(searchInput.toLowerCase()));
  };

  return (
    <section className={styles.pricepage}>
      <SearchBar setSearchInput={setSearchInput} />
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Properties for you</h1>
          <p>These properties are trending. Find the perfect place, or contact to learn more.</p>
        </div>
        <div className={styles.houselist}>
          {filterHouses().map((house) => (
            <Housecard key={house.id} id={house.id} img={house.img} name={house.name} cost={house.cost} address={house.address} rating={house.rating} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HousesPage;