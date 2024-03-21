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
    <div className='size-[500px]'>
      <img
        src={activeImage.url}
        alt={activeImage.alt}
        className='size-full rounded-xl'
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default Photo;
