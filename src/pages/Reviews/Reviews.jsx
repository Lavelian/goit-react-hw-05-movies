import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'Api/fetchApi';
import ReviewsList from 'components/ReviewsList';

const Reviews = ({ setIsLoading }) => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(({ results }) => {
        setReviews(results);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId, setIsLoading]);

  return <ReviewsList reviews={reviews} />;
};
export default Reviews;
