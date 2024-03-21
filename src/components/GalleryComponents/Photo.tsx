type Image = {
  index: number;
  url: string;
  title?: string;
  description?: string;
  alt: string;
  isActive: boolean;
};

interface images {
  images: Image[];
}

const Photo = ({ images }: images) => {
  let activeImage = images.filter((img) => img.isActive === true)[0];

  return (
    <>
      <img src={activeImage.url} alt={activeImage.alt} />
    </>
  );
};

export default Photo;
