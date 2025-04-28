import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <nav>
        <Link to="/" className="logo">MealMate</Link>
        <div className="nav-links">
          {user ? (
            <>
              <Link to="/weekly">Weekly View</Link>
              <button onClick={logout} className="logout-btn">Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;