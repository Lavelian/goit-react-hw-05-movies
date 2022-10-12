import { Oval } from 'react-loader-spinner';
import { LoaderStyled } from './Loder.styles';
import { createPortal } from 'react-dom';
import Modal from 'components/Modal';

const loader = document.querySelector('#loader');

const Loader = () => {
  return createPortal(
    <Modal>
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
    </Modal>,
    loader
  );
};
export default Loader;

// export const Loader = props => {
//   return createPortal(
//     <div className="Overlay">
//       <ThreeDots
//         height="80"
//         width="80"
//         radius="9"
//         color="#ff5100"
//         ariaLabel="three-dots-loading"
//         wrapperStyle={{}}
//         wrapperClassName=""
//         visible={true}
//       />
//     </div>,
//     modalPortal
//   );
// };
