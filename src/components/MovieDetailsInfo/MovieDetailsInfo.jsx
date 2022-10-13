import {
  ImgFilm,
  TitleFilm,
  AverageFilm,
  OverviewTitle,
  OverviewContent,
  GenresTitle,
  GenresFilm,
} from './MovieDetailsInfo.styled';
import Box from 'components/Box';
const MovieDetailsInfo = ({
  dataMovie: { title, overview, genres = [], poster_path = '', vote_average },
}) => {
  const baseUrlPatch = 'https://image.tmdb.org/t/p/w500';
  const getGenresTitle = genres => {
    if (genres.length) {
      return genres
        .map(({ name }) => {
          return name;
        })
        .join(',');
    }
    return 'Not Found';
  };
  const genresData = getGenresTitle(genres);

  return (
    <Box display="flex">
      <ImgFilm src={baseUrlPatch + poster_path} alt={title} />
      <Box ml={2}>
        <TitleFilm>{title}</TitleFilm>
        <AverageFilm>{vote_average}</AverageFilm>
        <OverviewTitle>Overview</OverviewTitle>
        <OverviewContent>{overview}</OverviewContent>
        <GenresTitle>Genres</GenresTitle>
        <GenresFilm>{genresData}</GenresFilm>
      </Box>
    </Box>
  );
};
export default MovieDetailsInfo;
