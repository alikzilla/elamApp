import { useState } from 'react';

const SearchBar = ({ setSearchInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSearchInput(event.target.value);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-2">
      <h1 className="text-3xl">There you can find safe houses</h1>
      <div>
        <input
          className="border border-black rounded-lg px-6"
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
