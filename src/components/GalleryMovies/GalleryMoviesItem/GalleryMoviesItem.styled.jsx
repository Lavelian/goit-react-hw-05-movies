import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkItem = styled(NavLink)`
  & img {
    width: 350px;
  }
  & p {
    margin: 0;
  }
`;
