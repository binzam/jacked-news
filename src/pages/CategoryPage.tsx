import { useParams } from 'react-router-dom';
import { mockDB } from '../data/data';
import ArticleCard from '../components/ArticleCard';
import styles from '../styles/CategoryPage.module.css';

const CategoryPage = () => {
  const { type } = useParams<{ type: string }>();

  const categoryArticles = mockDB.articles.filter((article) => {
    if (type === 'breaking') {
      return article.isBreaking;
    }
    return article.category.toLowerCase() === type?.toLowerCase();
  });

  const categoryTitles: Record<string, string> = {
    breaking: 'Breaking News',
    competitions: 'Competitions',
    workouts: 'Workouts',
    health: 'Health',
    nutrition: 'Nutrition',
    steroids: 'PEDs',
  };

  return (
    <div>
      <div className={styles.category_page}>
        <h1>{categoryTitles[type as string] || 'Category'}</h1>

        {categoryArticles.length > 0 ? (
          <div className={styles.articles_grid}>
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p>No articles found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
