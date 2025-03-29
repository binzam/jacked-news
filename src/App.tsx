import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import VideoHub from './pages/VideoHub';
import NewsLetterConfirm from './pages/NewsLetterConfirm';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import AppLayout from './components/Layouts/AppLayout';

function App() {
  return (
    <Routes>
     
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:type" element={<CategoryPage />} />
        <Route path="/article/:id/:title?" element={<ArticlePage />} />
        <Route path="/videos" element={<VideoHub />} />

        <Route path="/newsletter" element={<NewsLetterConfirm />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
