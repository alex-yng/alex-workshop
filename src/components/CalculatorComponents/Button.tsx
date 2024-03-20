interface ButtonProps {
  className?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
  return (
    <div
      className={`${className} size-full px-2 py-1 rounded-xl grid place-items-center text-light text-3xl`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
