import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { OnSearchMovie } from 'Api/fetchApi';
import { Formik } from 'formik';
import { FormMovies, FieldMovies, SearchButton } from './Movies.styled';
import GalleryMovies from 'components/GalleryMovies';

const Movies = () => {
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
    OnSearchMovie(actualQuery).then(({ results }) => {
      setFetchedMovies(results);
    });
  }, [actualQuery]);

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
