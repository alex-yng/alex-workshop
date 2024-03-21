import { images } from "../../constants";

export const cycleImage = (activeIndex: number, direction: string): number => {
  let nextIndex = 0;
  if (direction === "left") {
    if (activeIndex === 0) {
      nextIndex = images.length - 1;
    } else {
      nextIndex = activeIndex - 1;
    }
  } else if (direction === "right") {
    if (activeIndex === images.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = activeIndex + 1;
    }
  }
  console.log("activeIndex", activeIndex);
  return nextIndex;
};

export default cycleImage;
