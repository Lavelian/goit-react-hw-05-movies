import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: inline-flex;
  padding: ${p => p.theme.space[1]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.dark};
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

// export const MainNavList = styled.ul`
//   display: flex;
//   margin-left: 160px;
//   /* margin-left: auto; */
//   & li {
//     :not(:last-child) {
//       margin-right: 5px;
//     }
//   }
// `;
