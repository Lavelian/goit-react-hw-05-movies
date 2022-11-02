import GalleryMovies from 'components/GalleryMovies';
import { fetchTrendingMovies } from 'Api/fetchApi';
import { useState, useEffect } from 'react';
const HomePage = ({ setIsLoading }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    console.log(setIsLoading);
    setIsLoading(true);
    fetchTrendingMovies()
      .then(({ data: { results } }) => {
        setMovies(results);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);
  return (
    <main>
      <GalleryMovies movies={movies} trendingMovies={'Trending Movies'} />{' '}
    </main>
  );
};

export default HomePage;
