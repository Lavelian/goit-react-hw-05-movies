import { useLocation } from 'react-router-dom';
import { NavLinkItem } from './GalleryMoviesItem.styled';
const GalleryMoviesItem = ({ trendingMoviesUrl, trendingMoviesID, title }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  return (
    <NavLinkItem to={`/movies/${trendingMoviesID}`} state={{ from: location }}>
      <img src={baseUrl + trendingMoviesUrl} alt="" />
      <p>{title}</p>
    </NavLinkItem>
  );
};

export default GalleryMoviesItem;
