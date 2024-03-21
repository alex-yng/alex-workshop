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

const Buttons = ({ images }: images) => {
  return (
    <div className='flex gap-2'>
      {images.map((img, idx) => {
        return (
          <button
            key={idx}
            className={`flex justify-center items-center rounded-full border-2 border-light size-4 ${
              img.isActive ? "bg-light" : ""
            }`}
            onClick={() => {}}
          >
            {" "}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
