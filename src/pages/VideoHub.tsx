import { motion } from 'framer-motion';
import styles from '../styles/VideoHub.module.css';
import { mockDB } from '../data/data';
import { useState } from 'react';
const VideoHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Videos');
  const [selectedVideoTitle, setSelectedVideoTitle] = useState<string | null>(
    null
  );

  const filteredVideos =
    activeCategory === 'all'
      ? mockDB.videos
      : mockDB.videos.filter((video) => video.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Videos' },
    { id: 'workouts', name: 'Workouts' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'competitions', name: 'Competitions' },
    { id: 'interviews', name: 'Interviews' },
  ];
  const handleCategorySelect = (category: { id: string; name: string }) => {
    setActiveCategory(category.id);
    setSelectedVideo(null);
    setSelectedVideoTitle(null);
    setSelectedCategory(category.name);
  };
  const handleVideoSelect = (videoId: string, videoTitle: string) => {
    setSelectedVideo(videoId);
    setSelectedVideoTitle(videoTitle);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    setSelectedVideoTitle(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.video_hub}
    >
      <div className={styles.hero_section}>
        <h1>JACKED VIDEO HUB</h1>
        <p>
          Premium bodybuilding tutorials, workouts, and behind-the-scenes
          content
        </p>
      </div>

      {selectedVideo && (
        <section>
          <h2>Now Playing: {selectedVideoTitle}</h2>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 400 }}
            transition={{ duration: 0.3 }}
            className={styles.selected_video_container}
          >
            <div className={styles.video_player_wrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Selected Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video_player}
              />
              <button
                onClick={handleCloseVideo}
                className={styles.close_button}
                aria-label="Close video"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
                  <path d="M360 330.9L330.9 360 256 285.1 181.1 360 152 330.9l74.9-74.9-74.9-74.9 29.1-29.1 74.9 74.9 74.9-74.9 29.1 29.1-74.9 74.9z"></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </section>
      )}
      <div className={styles.categories_section}>
        <h2>Video Categories</h2>
        <div className={styles.category_buttons}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={activeCategory === category.id ? styles.active : ''}
              onClick={() => handleCategorySelect(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <section>
        <h2 className={styles.category_header}>{selectedCategory}</h2>
        <div className={styles.video_grid}>
          {filteredVideos.map((video) => (
            <motion.div
              key={video.id}
              className={styles.video_card}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
              onClick={() => handleVideoSelect(video.videoId, video.title)}
            >
              <div className={styles.video_container}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={styles.video_thumbnail}
                />
                <div className={styles.play_button}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className={styles.video_info}>
                <h3>{video.title}</h3>
                <div className={styles.meta_data}>
                  <span>{video.views} views</span>
                  <span>{new Date(video.date).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default VideoHub;
