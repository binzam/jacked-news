import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockDB } from '../data/data';

const ArticlePage = () => {
  const { id } = useParams();
  const article = mockDB.articles.find((item) => item.id === Number(id));
  if (article)
    return (
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="text-3xl font-bold"
        >
          {article.title}
        </motion.h1>

        <motion.img
          src={article.image}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
      </motion.article>
    );
};

export default ArticlePage;
