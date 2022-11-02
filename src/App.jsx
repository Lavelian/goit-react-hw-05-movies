import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBar from 'components/MainNavBar';
import Box from 'components/Box';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import { useState } from 'react';

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
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);
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
              <Route index element={<Home setIsLoading={setIsLoading} />} />
              <Route
                path="/movies"
                element={<Movies setIsLoading={setIsLoading} />}
              />
              <Route
                path="movies/:movieId"
                element={<MovieDetails setIsLoading={setIsLoading} />}
              >
                <Route
                  path="cast"
                  element={<Cast setIsLoading={setIsLoading} />}
                />
                <Route
                  path="reviews"
                  element={<Reviews setIsLoading={setIsLoading} />}
                />
              </Route>
              <Route path="*" element={<>Page not found</>} />
            </Route>
          </Routes>
        </Box>
      </Suspense>
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </>
  );
};
