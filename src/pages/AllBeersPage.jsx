// Iteration 4: List all the beers
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

function AllBeersPage() {
  // Get list of beers from API
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      // console.log(response.data);

      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className='AllBeers'>
      <h1>All Beers</h1>
      <SearchBar setBeers={setBeers} />
      {beers.map(beer => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`} className='link'>
              <div className='BeerCard'>
                <img src={beer.image_url} alt='beer' />
                <div className='BeerInfo'>
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
