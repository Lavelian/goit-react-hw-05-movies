import { Formik } from 'formik';
import { useEffect } from 'react';
import { useState } from 'react';
import { OnSearchMovie } from 'Api/fetchApi';
import { FormMovies, FieldMovies, SearchButton } from './Movies.styled';
import GalleryMovies from 'components/GalleryMovies';
const Movies = () => {
  const [query, setQuery] = useState('');
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const handleSabmit = ({ searchMovies }, { resetForm }) => {
    setQuery(searchMovies.trim());
    console.log(query);
    resetForm();
  };
  useEffect(() => {
    if (query === '') {
      return;
    }
    OnSearchMovie(query).then(({ results }) => {
      setFetchedMovies(results);
    });
  }, [query]);
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
