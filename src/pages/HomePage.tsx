import { staggerContainer, fadeIn } from '../utils/animations';
import { mockDB } from '../data/data';
import { motion } from 'framer-motion';
import ArticleCard from '../components/ArticleCard';
import styles from '../styles/HomePage.module.css';
import ImageOne from '../assets/images/arnold.webp';
import {
  FaDumbbell,
  FaFire,
  FaHeartbeat,
  FaNutritionix,
  FaTrophy,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const featuredCategories = [
    { name: 'Breaking News', icon: <FaFire />, path: '/category/breaking' },
    {
      name: 'Competitions',
      icon: <FaTrophy />,
      path: '/category/competitions',
    },
    { name: 'Workouts', icon: <FaDumbbell />, path: '/category/workouts' },
    { name: 'Health', icon: <FaHeartbeat />, path: '/category/health' },
    { name: 'Nutrition', icon: <FaNutritionix />, path: '/category/nutrition' },
  ];
  const featuredAthlete = {
    name: 'Arnold Schwarzenegger',
    title: '7-Time Mr. Olympia',
    image: ImageOne,
    quote:
      'The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion.',
  };
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={styles.hero_banner}
      >
        <div className={styles.hero_content}>
          <h1>JACKED NEWS</h1>
          <p>
            Your ultimate source for bodybuilding news, workouts, and nutrition
          </p>
        </div>
      </motion.section>

      <div className={styles.home_container}>
        <section className={styles.categories_section}>
          <h2 className={styles.section_title}>Featured Categories</h2>
          <div className={styles.categories_grid}>
            {featuredCategories.map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05 }}
                className={styles.category_card}
              >
                <Link to={category.path}>
                  <div className={styles.category_icon}>{category.icon}</div>
                  <h3>{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
        <section className={styles.articles_section}>
          <h2 className={styles.section_title}>Latest News</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className={styles.article_grid}
          >
            {mockDB.articles.slice(0, 6).map((article, i) => (
              <motion.div
                className={styles.article_box}
                key={article.id}
                variants={fadeIn('up', 'spring', i * 0.1, 0.5)}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </motion.div>
        </section>
        <section>
          <h2 className={styles.section_title}>Athlete of the Month</h2>
          <div className={styles.featured_athlete}>
            <div className={styles.athlete_image_container}>
              <img
                src={featuredAthlete.image}
                alt={featuredAthlete.name}
                className={styles.athlete_image}
              />
            </div>
            <div className={styles.athlete_content}>
              <h3>{featuredAthlete.name}</h3>
              <p className={styles.athlete_title}>{featuredAthlete.title}</p>
              <blockquote className={styles.athlete_quote}>
                "{featuredAthlete.quote}"
              </blockquote>
            </div>
          </div>
        </section>
        <section className={styles.supplements_section}>
          <h2 className={styles.section_title}>Popular Supplements</h2>
          <div className={styles.supplements_grid}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className={styles.article_grid}
            >
              {mockDB.articles.slice(0, 6).map((article, i) => (
                <motion.div
                  className={styles.article_box}
                  key={article.id}
                  variants={fadeIn('up', 'spring', i * 0.1, 0.5)}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
