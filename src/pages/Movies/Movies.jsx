import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { OnSearchMovie } from 'Api/fetchApi';
import { Formik } from 'formik';
import { FormMovies, FieldMovies, SearchButton } from './Movies.styled';
import GalleryMovies from 'components/GalleryMovies';

const Movies = ({ setIsLoading }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const actualQuery = searchParams.get('query') ?? '';
  const handleSabmit = ({ searchMovies }, { resetForm }) => {
    searchMovies = searchMovies.trim();
    setSearchParams(searchMovies !== '' ? { query: searchMovies } : {});
    resetForm();
  };
  useEffect(() => {
    if (actualQuery === '') {
      return;
    }
    setIsLoading(true);
    OnSearchMovie(actualQuery)
      .then(({ results }) => {
        setFetchedMovies(results);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [actualQuery, setIsLoading]);

  return (
    <main>
      <Formik initialValues={{ searchMovies: '' }} onSubmit={handleSabmit}>
        <FormMovies>
          <FieldMovies
            type="text"
            name="searchMovies"
            autoComplete="off"
            autoFocus
            placeholder="Search Movies"
          />
          <SearchButton type="submit">Search</SearchButton>
        </FormMovies>
      </Formik>
      <GalleryMovies movies={fetchedMovies} />
    </main>
  );
};

export default Movies;
