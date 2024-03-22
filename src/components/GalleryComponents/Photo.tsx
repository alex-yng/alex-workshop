import { images } from "../../constants";

const Photo = ({
  activeIndex,
  fromLeft,
}: {
  activeIndex: number;
  fromLeft: boolean;
}) => {
  let activeImage = images[activeIndex];

  return (
    <img
      src={activeImage.url}
      alt={activeImage.alt}
      className={`size-full rounded-xl ${
        fromLeft ? "animate-galleryFromLeft" : "animate-galleryFromRight"
      }`}
      style={{ objectFit: "contain" }}
    />
  );
};

export default Photo;
