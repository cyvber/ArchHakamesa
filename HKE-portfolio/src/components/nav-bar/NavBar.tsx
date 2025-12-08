import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo/HakamEsa-logo-notxt-trns-white.png'
import menu from '../../assets/icons/menu.png';
import closeIcon from '../../assets/icons/close.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Admin logged-in check

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(); // refresh UI
  };

  return (
    <div className='navbar-main'>
      <div className="navbar-container">
        <img 
          src={logo} 
          alt="לוגו החברה" 
          className="nav-logo" 
          onClick={() => navigate('/')} 
          style={{ cursor: 'pointer' }}
        />

        {/* Desktop Links */}
        <div className="nav-links">
          <Link to="/">ראשי</Link>
          <Link to="/projects">פרויקטים</Link>
          <Link to="/services">שירותים</Link>
          <Link to="/" onClick={() => sessionStorage.setItem('scrollToContact', 'true')}>
            צור קשר
          </Link>

          {/* Only show Add Project if logged in */}
          {token && <Link to="/add-project">הוסף פרויקט</Link>}

          {/* LOGIN / LOGOUT */}
          {!token ? (
            <Link to="/admin-login">התחברות</Link>
          ) : (
            <span onClick={handleLogout} className="logout-link">התנתק</span>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={isMenuOpen ? closeIcon : menu} alt="תפריט" />
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>ראשי</Link>
        <Link to="/projects" onClick={toggleMenu}>פרויקטים</Link>
        <Link to="/services" onClick={toggleMenu}>שירותים</Link>
        <Link to="/about" onClick={toggleMenu}>אודות</Link>
        <Link to="/contact" onClick={toggleMenu}>צור קשר</Link>

        {/* Add Project - Mobile */}
        {token && (
          <Link to="/add-project" onClick={toggleMenu}>
            הוסף פרויקט
          </Link>
        )}

        {/* LOGIN / LOGOUT - Mobile */}
        {!token ? (
          <Link to="/admin-login" onClick={toggleMenu}>התחברות</Link>
        ) : (
          <span
            onClick={() => {
              toggleMenu();
              handleLogout();
            }}
            className="logout-link"
          >
            התנתק
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
