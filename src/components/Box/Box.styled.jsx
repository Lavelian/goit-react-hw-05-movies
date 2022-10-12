import styled from 'styled-components';
import {
  typography,
  space,
  color,
  layout,
  flexbox,
  borders,
  grid,
} from 'styled-system';
export const Box = styled.div`
  ${typography}
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${borders}
  ${grid}
`;

export default Box;
// export const Container = styled.div`
//   width: 1200px;

//   padding-left: 15px;
//   padding-right: 15px;
//   margin-left: auto;
//   margin-right: auto;
//   // outline: 1px solid red;
// `;
