import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockDB } from '../data/data';
import styles from '../styles/ArticlePage.module.css';
import ArticleCard from '../components/ArticleCard';
import { FaArrowLeft, FaBookmark, FaClock, FaShareAlt } from 'react-icons/fa';
import { toKebabCase } from '../utils/urlConstructor';
const ArticlePage = () => {
  const { id, title } = useParams();
  const navigate = useNavigate();
  const article = mockDB.articles.find((item) => item.id === Number(id));
  if (article && title && toKebabCase(article.title) !== title) {
    return <Navigate to={`/article/${id}/${toKebabCase(article.title)}`} replace />;
  }
  if (!article) {
    return (
      <div className={styles.not_found}>
        Article not found
        <Link to="/" className={styles.back_button}>
          <FaArrowLeft /> Back to Articles
        </Link>
      </div>
    );
  }
  const handleBack = () => {
    navigate(`/category/${article.category}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.article_page}
    >
      <div className={styles.article_header}>
        <button onClick={handleBack} className={styles.back_button}>
          <FaArrowLeft />{' '}
          <span>
            Back to <strong>{article.category}</strong> Articles
          </span>
        </button>

        <div className={styles.article_meta}>
          <div className={styles.article_actions}>
            <button className={styles.action_button}>
              <FaShareAlt /> Share
            </button>
            <button className={styles.action_button}>
              <FaBookmark /> Save
            </button>
          </div>
        </div>
      </div>

      <article className={styles.article_content}>
        {article.isBreaking && (
          <div className={styles.breaking_banner}>New</div>
        )}

        <h1 className={styles.article_title}>{article.title}</h1>
        <div className={styles.category_badge}>
          {article.category.toUpperCase()}
        </div>
        <div className={styles.article_info}>
          <p>{article.author}</p>
          <span className={styles.article_date}>
            {new Intl.DateTimeFormat('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }).format(new Date(article.date))}
            <FaClock />

            <span>{article.readTime}</span>
          </span>
        </div>

        <img
          src={article.image}
          alt={article.title}
          className={styles.article_image}
        />

        <div className={styles.article_text}>
          {article.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className={styles.related_articles}>
        <h2>More {article.category} Articles</h2>
        <div className={styles.related_grid}>
          {mockDB.articles
            .filter(
              (a) => a.category === article.category && a.id !== article.id
            )
            .slice(0, 3)
            .map((relatedArticle) => (
              <ArticleCard key={relatedArticle.id} article={relatedArticle} />
            ))}
        </div>
      </section>
    </motion.div>
  );
};

export default ArticlePage;
