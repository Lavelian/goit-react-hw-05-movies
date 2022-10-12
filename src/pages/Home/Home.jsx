import GalleryMovies from 'components/GalleryMovies';
import { fetchTrendingMovies } from 'Api/fetchApi';
import { useState, useEffect } from 'react';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies()
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .finally(() => {});
  }, []);
  return (
    <main>
      <GalleryMovies movies={movies} />{' '}
    </main>
  );
};

export default HomePage;
