import { Oval } from 'react-loader-spinner';
import { LoaderStyled } from './Loder.styles';

const Loader = () => {
  return (
    <LoaderStyled>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </LoaderStyled>
  );
};
export default Loader;
