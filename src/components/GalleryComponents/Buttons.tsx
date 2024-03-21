import { images } from "../../constants";

const Buttons = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className='flex gap-2'>
      {images.map((img, idx) => {
        return (
          <button
            key={idx}
            className={`flex justify-center items-center rounded-full border-2 border-light size-4 ${
              img.index === activeIndex ? "bg-light" : ""
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
