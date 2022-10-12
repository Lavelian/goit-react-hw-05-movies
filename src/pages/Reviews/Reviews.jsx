import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'Api/fetchApi';
import ReviewsList from 'components/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovieReviews(movieId).then(({ results }) => {
      setReviews(results);
    });
  }, [movieId]);

  return <ReviewsList reviews={reviews} />;
};
export default Reviews;
