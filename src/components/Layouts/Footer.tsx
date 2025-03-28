import { Link } from 'react-router-dom';
import { FaDumbbell, FaNewspaper, FaVideo, FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const navLinks = [
    { path: '/', name: 'Home', icon: <FaNewspaper /> },
    { path: '/category/competitions', name: 'Competitions', icon: <FaFire /> },
    { path: '/category/workouts', name: 'Workouts', icon: <FaDumbbell /> },
    { path: '/videos', name: 'Videos', icon: <FaVideo /> },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={styles.footer}
    >
      <div className={styles.footer_container}>
        <div className={styles.footer_brand}>
          <h2 className={styles.footer_title}>JACKED NEWS</h2>
          <p className={styles.footer_subtitle}>
            The ultimate bodybuilding news source
          </p>
        </div>

        <div className={styles.footer_links}>
          {navLinks.map((link) => (
            <motion.div key={link.path} whileHover={{ y: -2 }}>
              <Link to={link.path} className={styles.footer_link}>
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
        className={styles.footer_copyright}
      >
        © {new Date().getFullYear()} Jacked News. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
