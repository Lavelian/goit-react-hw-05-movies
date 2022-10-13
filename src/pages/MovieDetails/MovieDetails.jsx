import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'Api/fetchApi';
import { useEffect, useState, Suspense } from 'react';
import MovieDetailsInfo from 'components/MovieDetailsInfo';
import NavBarInMovies from 'components/NavBarInMovies';
import { BackLink } from 'components/BackLink/BackLink';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  console.log(location.state);
  useEffect(() => {
    fetchMovieDetails(movieId).then(({ data }) => {
      setDataMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      <MovieDetailsInfo dataMovie={dataMovie} />

      <NavBarInMovies />

      <Suspense
        fallback={
          <Modal>
            <Loader />
          </Modal>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

//  A component suspended while responding to synchronous input.
// This will cause the UI to be replaced with a loading indicator.
// To fix, updates that suspend should be wrapped with startTransition.
