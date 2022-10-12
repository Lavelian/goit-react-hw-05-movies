import { MainNavItem, MainNavList } from './MainNavBar.styled';
import { Box } from 'components/Box/Box.styled';

export default function NavBar() {
  return (
    <Box as="nav" width="1200px" mx="auto">
      <MainNavList>
        <li>
          <MainNavItem to="/" end>
            Home
          </MainNavItem>
        </li>
        <li>
          <MainNavItem to="/movies">Movies</MainNavItem>
        </li>
      </MainNavList>
    </Box>
  );
}
