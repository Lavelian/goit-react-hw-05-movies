import { useState } from 'react';
import { fetchMovieСast } from 'Api/fetchApi';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CastLists from 'components/CastLists';
const Cast = ({ setIsLoading }) => {
  const { movieId } = useParams();

  const [casts, setCasts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchMovieСast(movieId)
      .then(({ data }) => setCasts(data))
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId, setIsLoading]);

  return <CastLists castsData={casts} />;
};

export default Cast;
