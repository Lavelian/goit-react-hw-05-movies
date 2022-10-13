import { MainNavItem, MainNavList } from './MainNavBar.styled';
import { Box } from 'components/Box/Box.styled';
import { Outlet } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <Box as="header" mb={2} borderBottom="normal" borderBottomColor="black">
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
      </Box>
      <Outlet />
    </>
  );
}
