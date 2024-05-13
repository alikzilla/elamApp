import SearchBar from "./components/SearchBar";
import HouseCard from "./components/HouseCard";
import { houses } from "../../store";
import { useState } from "react";

const HousePage = ({}) => {
  const [searchInput, setSearchInput] = useState('');

  const filterHouses = () => {
    if (!searchInput.trim()) {
      return houses;
    }
    return houses.filter(house => house.name.toLowerCase().includes(searchInput.toLowerCase()));
  };

  const filteredHouses = filterHouses();

  return (
    <section className="py-28">
      <SearchBar setSearchInput={setSearchInput} />
      <div className="px-10 flex flex-col gap-4">
        <div>
          <h1>Properties for you</h1>
          <p>These properties are trending. Find the perfect place, or contact to learn more.</p>
        </div>
        {filteredHouses.length > 0 ? (
          <div className="grid grid-cols-4 gap-x-4 gap-y-6">
            {filteredHouses.map((house, index) => (
              <HouseCard key={index} img={house.img} name={house.name} cost={house.cost} address={house.address} rating={house.rating} />
            ))}
          </div>
        ) : (
          <div className="self-center text-2xl text-red-600">
            <p>No houses found.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default HousePage;
