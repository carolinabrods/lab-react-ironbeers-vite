// Iteration 3: Navbar
import { Link } from 'react-router-dom';
import homeIcon from '../assets/home-icon.png';

function Navbar() {
  return (
    <nav className='Navbar'>
      <Link to='/'>
        <img src={homeIcon} alt='home icon' />
      </Link>
      <h1>Ironbeers</h1>
    </nav>
  );
}

export default Navbar;
