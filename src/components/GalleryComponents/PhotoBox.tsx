import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const PhotoBox = ({ children }: { children: React.ReactNode }) => {
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

export default PhotoBox;
