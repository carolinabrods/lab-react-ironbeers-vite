// Iteration 6: A random beer
// Copied the code from beer details page
import { useState, useEffect } from 'react';
import axios from 'axios';

function RandomBeersPage() {
  const [beer, setBeer] = useState(null);

  // 5.2 Make a request to the API - GET
  const getRandomBeer = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers/random'
      );
      // console.log(response.data);

      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomBeer();
  }, []);

  return (
    <div className='BeerDetailsPage'>
      {beer && (
        <>
          <img src={beer.image_url} alt='beer image' />
          <h2>{beer.name}</h2>
          <h3>{beer.tagline}</h3>
          <p>{beer.description}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Contributor: {beer.contributed_by}</p>
        </>
      )}
    </div>
  );
}

export default RandomBeersPage;
