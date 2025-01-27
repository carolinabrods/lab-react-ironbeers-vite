// Iteration 2: Home page
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='HomePage'>
      <Link to='/beers' className='link'>
        <img src='src/assets/beers.png' alt='beers' />
        <div className='home-block'>
          <h2>All Beers</h2>
          <p>Check the full list of beers that Ironhackers like</p>
        </div>
      </Link>
      <Link to='/random-beer' className='link'>
        <img src='src/assets/random-beer.png' alt='random beer' />
        <div className='home-block'>
          <h2>Random Beer</h2>
          <p>Pick a random beer and learn everything about it!</p>
        </div>
      </Link>
      <Link to='/new-beer' className='link'>
        <img src='src/assets/new-beer.png' alt='new beer' />
        <div className='home-block'>
          <h2>New Beer</h2>
          <p>Do you want to contribute? Add a new beer to our list!</p>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
