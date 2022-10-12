import axios from 'axios';
const KEY = 'b36a691b07ce9c3557881351abfd0b29';

export const fetchTrendingMovies = async () => {
  const response = axios.get('https://api.themoviedb.org/3/trending/all/day', {
    params: {
      api_key: KEY,
    },
  });
  return response;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      params: {
        api_key: KEY,
      },
    }
  );
  return response;
};
export const fetchMovieСast = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: {
        api_key: KEY,
      },
    }
  );
  return response;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      params: {
        api_key: KEY,
        page: 1,
      },
    }
  );
  return response.data;
};

export const OnSearchMovie = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        language: 'en-US',
        api_key: KEY,
        page: 1,
        query,
      },
    }
  );
  return response.data;
};
