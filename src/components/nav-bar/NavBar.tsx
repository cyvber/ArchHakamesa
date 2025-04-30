import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../../assets/logo/HakamEsa-logo.png'
import menu from '../../assets/icons/menu.png';
import closeIcon from '../../assets/icons/close.png'; 

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <Link to="/about">אודות</Link>
          <Link to="/contact">צור קשר</Link>
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
      </div>
    </div>
  );
};

export default NavBar;
