// Iteration 5: Display a single beer
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);

  // 5.1 Access URL Parameter
  const { beerId } = useParams();

  // 5.2 Make a request to the API - GET
  const getSingleBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      // console.log(response.data);

      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBeer();
  }, []);

  return (
    <div className='BeerDetailsPage'>
      {/* 5.3 Display beer details */}
      {beer && (
        <>
          <img src={beer.image_url} alt='beer image' />
          <div className='BeerInfo'>
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p>{beer.description}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>Contributor: {beer.contributed_by}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
