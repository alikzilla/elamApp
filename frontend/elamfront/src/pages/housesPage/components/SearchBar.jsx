import { useState } from 'react';
import styles from "./pricecomp.module.css";

const SearchBar = ({ setSearchInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <section className={styles.searchbar}>
      <h1 className={styles.title}>There you can find safe houses</h1>
      <div className={styles.controls}>
        <input 
          type="text" 
          placeholder="District, Address, RC" 
          value={inputValue} 
          onChange={handleInputChange} 
        />
      </div>
    </section>
  );
};

export default SearchBar;