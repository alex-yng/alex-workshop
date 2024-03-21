import { images } from "../../constants";

const Photo = ({ activeIndex }: { activeIndex: number }) => {
  let activeImage = images[activeIndex];

  return (
    <img
      src={activeImage.url}
      alt={activeImage.alt}
      className='size-full rounded-xl'
      style={{ objectFit: "contain" }}
    />
  );
};

export default Photo;
