import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoBox from "./PhotoBox";
import cycleImage from "../../lib/GalleryLogic/cycleImage";
import Buttons from "./Buttons";
import Photo from "./Photo";
import { useState } from "react";

const GalleryWrapper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='flex items-center justify-center gap-8'>
      <button
        className='text-4xl sm:text-6xl md:text-8xl'
        onClick={() => {
          setActiveIndex(() => cycleImage(activeIndex, "left"));
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} color='white' />
      </button>
      <PhotoBox>
        <div className='size-[200px] sm:size-[300px] md:size-[500px]'>
          <Photo activeIndex={activeIndex} />
        </div>
        <Buttons activeIndex={activeIndex} setActiveIndex={handleButtonClick} />
      </PhotoBox>
      <button
        className='text-4xl sm:text-6xl md:text-8xl'
        onClick={() => {
          setActiveIndex(() => cycleImage(activeIndex, "right"));
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} color='white' />
      </button>
    </div>
  );
};

export default GalleryWrapper;
