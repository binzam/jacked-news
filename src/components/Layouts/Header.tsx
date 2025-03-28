import { Link } from 'react-router-dom';
import { FaDumbbell, FaNewspaper, FaVideo, FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const navLinks = [
    { path: '/', name: 'Home', icon: <FaNewspaper /> },
    { path: '/category/competitions', name: 'Competitions', icon: <FaFire /> },
    { path: '/category/workouts', name: 'Workouts', icon: <FaDumbbell /> },
    { path: '/videos', name: 'Videos', icon: <FaVideo /> },
  ];

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

        <button className={styles.mobile_menu_button}>☰</button>
      </div>
    </motion.header>
  );
};

export default Header;
