import { ReactNode } from "react";

interface ButtonBoxProps {
  children: ReactNode;
}

const Wrapper: React.FC<ButtonBoxProps> = ({ children }) => {
  return (
    <div className="bg-gray-light size-full grid grid-rows-5 grid-cols-4 gap-2 p-2">
      {children}
    </div>
  );
};

export default Wrapper;
