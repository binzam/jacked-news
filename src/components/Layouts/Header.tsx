import { Link, NavLink } from 'react-router-dom';
import {
  FaDumbbell,
  FaNewspaper,
  FaVideo,
  FaFire,
  FaTimes,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../../styles/Header.module.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { path: '/', name: 'Home', icon: <FaNewspaper /> },
    { path: '/category/competitions', name: 'Competitions', icon: <FaFire /> },
    { path: '/category/workouts', name: 'Workouts', icon: <FaDumbbell /> },
    { path: '/videos', name: 'Videos', icon: <FaVideo /> },
  ];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMobileMenuOpen]);
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={styles.header}
    >
      <div className={styles.header_container}>
        <Link to="/" className={styles.logo_link}>
          <motion.div whileHover={{ scale: 1.05 }} className={styles.logo_icon}>
            💪
            <h1 className={styles.logo_text}>
              <span className={styles.logo_accent}>JACKED</span> NEWS
            </h1>
          </motion.div>
        </Link>

        <nav className={styles.desktop_nav}>
          {navLinks.map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className={`${styles.nav_link} ${
                  window.location.pathname === link.path ? styles.active : ''
                }`}
              >
                <span className={styles.nav_icon}>{link.icon}</span>
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <button
          onClick={toggleMobileMenu}
          className={styles.mobile_menu_button}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : '☰'}
        </button>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={styles.mobile_menu_backdrop}
            onClick={toggleMobileMenu}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={styles.mobile_menu}
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} whileTap={{ scale: 0.95 }}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `${styles.mobile_nav_link} ${
                        isActive ? styles.mobile_active : ''
                      }`
                    }
                    onClick={toggleMobileMenu}
                  >
                    <span className={styles.mobile_nav_icon}>{link.icon}</span>
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
