import Buttons from "./Buttons";
import Photo from "./Photo";

type Image = {
  url: string;
  title: string;
  description: string;
  alt: string;
  isActive: boolean;
};

interface images {
  images: Image[];
}

const PhotoBox = ({ images }: images) => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Photo />
      <Buttons images={images} />
    </div>
  );
};

export default PhotoBox;
