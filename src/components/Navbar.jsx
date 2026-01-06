import { Link, NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <h3>Society Portal</h3>
      <div>
        <Link to="/">Register</Link>
        <Link to="/maintenance">Maintenance</Link>
        <Link to="/complaints">Complaints</Link>
      </div>
    </nav>
  );
}

export default Navbar;