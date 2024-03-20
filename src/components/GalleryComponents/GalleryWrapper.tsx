import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GalleryWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex items-center justify-center gap-8'>
      <button className='text-8xl'>
        <FontAwesomeIcon icon={faChevronLeft} color='white' />
      </button>
      {children}
      <button className='text-8xl'>
        <FontAwesomeIcon icon={faChevronRight} color='white' />
      </button>
    </div>
  );
};

export default GalleryWrapper;
