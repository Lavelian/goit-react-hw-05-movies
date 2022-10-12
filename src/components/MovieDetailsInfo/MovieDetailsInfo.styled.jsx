import styled from 'styled-components';

export const ImgFilm = styled.img`
  width: 350px;
`;
export const TitleFilm = styled.h2`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const AverageFilm = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const OverviewTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const OverviewContent = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const GenresTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const GenresFilm = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
