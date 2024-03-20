import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="mx-auto my-8 flex flex-col gap-2 items-center bg-black w-[340px] h-[540px] rounded-xl p-2">
      {children}
    </div>
  );
};

export default Wrapper;
