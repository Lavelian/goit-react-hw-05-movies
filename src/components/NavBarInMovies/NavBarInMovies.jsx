import Box from 'components/Box';
import { NavItem } from './NavBarInMovies.styled';

const NavBarInMovies = () => {
  return (
    <Box as="ul" display="flex" my={1}>
      <li>
        <NavItem to="cast">Cast</NavItem>
      </li>
      <li>
        <NavItem to="reviews">Reviews</NavItem>
      </li>
    </Box>
  );
};
export default NavBarInMovies;
