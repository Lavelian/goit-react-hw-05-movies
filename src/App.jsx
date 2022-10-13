import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBar from 'components/MainNavBar';
import Box from 'components/Box';
import Modal from 'components/Modal';
import Loader from 'components/Loader';

// import Loader from 'components/Loader';
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from './pages/MovieDetails';
// import Cast from 'pages/Cast';
// import Reviews from 'pages/Reviews';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <Modal>
            <Loader />
          </Modal>
        }
      >
        <Box width="1200px" px={1} mx="auto">
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<>Page not found</>} />
            </Route>
          </Routes>
        </Box>
      </Suspense>
    </>
  );
};
