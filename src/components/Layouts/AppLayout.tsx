import { motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import styles from '../../styles/AppLayout.module.css';
import { pageTransition, pageVariants } from '../../utils/animations';
import ScrollToTop from '../ScrollToTop';
const AppLayout = () => {
  const location = useLocation();

  return (
    <div className={styles.App}>
      <Header />
      <ScrollToTop />
      <motion.main
        variants={pageVariants}
        transition={pageTransition}
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={styles.main_content}
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  );
};

export default AppLayout;
