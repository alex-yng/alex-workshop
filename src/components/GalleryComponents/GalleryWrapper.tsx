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
  const [fromLeft, setFromLeft] = useState(false);

  const handleButtonClick = (index: number) => {
    if (index < activeIndex) {
      setFromLeft(true);
    } else {
      setFromLeft(false);
    }
    setActiveIndex(index);
  };

  const handleCycleImage = (direction: string) => {
    if (direction === "left") {
      setFromLeft(true);
    } else {
      setFromLeft(false);
    }
    setActiveIndex(() => cycleImage(activeIndex, direction));
  };

  return (
    <div className='flex items-center justify-center gap-8'>
      <button
        className='text-4xl sm:text-6xl md:text-8xl'
        onClick={() => handleCycleImage("left")}
      >
        <FontAwesomeIcon icon={faChevronLeft} color='white' />
      </button>
      <PhotoBox>
        <div className='size-[200px] sm:size-[300px] md:size-[500px]'>
          <Photo activeIndex={activeIndex} fromLeft={fromLeft} />
        </div>
        <Buttons activeIndex={activeIndex} setActiveIndex={handleButtonClick} />
      </PhotoBox>
      <button
        className='text-4xl sm:text-6xl md:text-8xl'
        onClick={() => handleCycleImage("right")}
      >
        <FontAwesomeIcon icon={faChevronRight} color='white' />
      </button>
    </div>
  );
};

export default GalleryWrapper;
