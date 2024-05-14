import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Housecard from "./components/Housecard";
import styles from "./housesPage.module.css";

const HousesPage = () => {
  const [houses, setHouses] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://localhost:5000/houses')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch houses data');
        }
        return response.json();
      })
      .then(data => {
        setHouses(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filterHouses = () => {
    if (!searchInput.trim()) {
      return houses;
    }
    return houses.filter(house => house.name.toLowerCase().includes(searchInput.toLowerCase()));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
