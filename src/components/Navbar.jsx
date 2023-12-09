// Iteration 3: Navbar
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
      <Link to='/'>
        <img src='../assets/home-icon.png' alt='home icon' />
      </Link>

      <h1>Ironbeers</h1>
    </nav>
  );
}

export default Navbar;
