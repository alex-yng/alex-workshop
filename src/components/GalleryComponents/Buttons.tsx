import { images } from "../../constants";

const Buttons = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: any;
}) => {
  return (
    <div className='flex gap-2'>
      {images.map((img, idx) => {
        return (
          <button
            key={idx}
            className={`flex justify-center items-center rounded-full border-2 border-light size-2 sm:size-3 md:size-4 ${
              img.index === activeIndex ? "bg-light" : ""
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            {" "}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
