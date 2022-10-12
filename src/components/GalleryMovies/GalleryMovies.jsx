import GalleryMoviesItem from './GalleryMoviesItem';
import { GalleryList } from './GalleryMovies.styled';

const GalleryMovies = ({ movies }) => {
  return (
    <GalleryList>
      {movies.map(({ poster_path, id, title }) => {
        return (
          title && (
            <li key={id}>
              <GalleryMoviesItem
                trendingMoviesUrl={poster_path}
                trendingMoviesID={id}
                title={title}
              />
            </li>
          )
        );
      })}
    </GalleryList>
  );
};

export default GalleryMovies;
GalleryMovies.defaultProps = {
  movies: [],
};
