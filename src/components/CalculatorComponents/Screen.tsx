interface ScreenProps {
  display: string;
  pastDisplay: string;
}

const Screen = ({ display, pastDisplay }: ScreenProps) => {
  return (
    <div className="bg-violet-dark px-3 w-full rounded-lg h-[130px] flex justify-end items-end text-6xl text-light">
      <div className="flex flex-col items-end">
        <div className="text-4xl opacity-60">{pastDisplay}</div>
        {display}
      </div>
    </div>
  );
};

export default Screen;
