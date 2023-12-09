// Iteration 8: Filter the beers
import { useState } from 'react';
import axios from 'axios';

function SearchBar({ setBeers }) {
  const [search, setSearch] = useState('');

  const handleSearch = async e => {
    setSearch(e.target.value);
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`
      );

      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='SearchBar'>
      <h2>Search for Beers</h2>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Type something'
        value={search}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
