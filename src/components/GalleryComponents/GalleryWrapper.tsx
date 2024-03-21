import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoBox from "./PhotoBox";

type Image = {
  index: number;
  url: string;
  title: string;
  description: string;
  alt: string;
  isActive: boolean;
};

interface images {
  images: Image[];
}

const GalleryWrapper = ({ images }: images) => {
  return (
    <div className='flex items-center justify-center gap-8'>
      <button className='text-8xl'>
        <FontAwesomeIcon icon={faChevronLeft} color='white' />
      </button>
      <PhotoBox images={images} />
      <button className='text-8xl'>
        <FontAwesomeIcon icon={faChevronRight} color='white' />
      </button>
    </div>
  );
};

export default GalleryWrapper;
