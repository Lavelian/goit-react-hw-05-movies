import styled from 'styled-components';

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 10px;
`;
export const TrendingMoviesTitle = styled.h1`
  display: flex;
  margin-bottom: ${p => p.theme.space[3]}px;
  justify-content: center;
`;
