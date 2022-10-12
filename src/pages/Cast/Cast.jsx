import { useState } from 'react';
import { fetchMovieСast } from 'Api/fetchApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CastLists from 'components/CastLists';
const Cast = () => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);
  useEffect(() => {
    fetchMovieСast(movieId).then(({ data }) => setCasts(data));
  }, [movieId]);

  return <CastLists castsData={casts} />;
};

export default Cast;
