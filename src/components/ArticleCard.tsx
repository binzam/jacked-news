import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaClock, FaShareAlt, FaBookmark } from 'react-icons/fa';
import { Article } from '../interfaces';
import styles from '../styles/ArticleCard.module.css';
interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const categoryColors: Record<Article['category'], string> = {
    competitions: styles.bg_red,
    nutrition: styles.bg_green,
    steroids: styles.bg_yellow,
    workouts: styles.bg_blue,
  };
  const categoryClass = categoryColors[article.category] || styles.bg_gray;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={styles.card_container}
    >
      <div className={styles.image_container}>
        <img
          src={article.image}
          alt={article.title}
          className={styles.card_image}
          loading="lazy"
        />
        <div className={styles.image_overlay} />

        <span className={`${styles.category_badge} ${categoryClass}`}>
          {article.category.toUpperCase()}
        </span>

        {article.isBreaking && (
          <div className={styles.breaking_badge}>BREAKING</div>
        )}
      </div>

      <div className={styles.card_content}>
        <div className={styles.meta_info}>
          <span>{new Date(article.date).toLocaleDateString()}</span>
          <span className={styles.meta_separator}>•</span>
          <FaClock className={styles.meta_icon} />
          {/* <span>{readingTime} min read</span> */}
        </div>

        <h3 className={styles.card_title}>
          <Link to={`/article/${article.id}`} className={styles.title_link}>
            {article.title}
          </Link>
        </h3>

        <p className={styles.card_excerpt}>
          {article.excerpt || article.content.substring(0, 150) + '...'}
        </p>

        <div className={styles.card_footer}>
          <div className={styles.action_buttons}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={styles.action_button}
              aria-label="Share"
            >
              <FaShareAlt />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={styles.action_button}
              aria-label="Save"
            >
              <FaBookmark />
            </motion.button>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to={`/article/${article.id}`}
              className={styles.read_more_link}
            >
              Read more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.read_more_icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default ArticleCard;
