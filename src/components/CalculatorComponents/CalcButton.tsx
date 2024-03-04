export default function CalcButton({
  text = "",
  colSpan = "",
  bgColor = "bg-silver",
  rounding = "",
  onclick = () => {},
}) {
  return (
    <button
      className={`px-2 py-1 text-2xl ${bgColor} col-span-${colSpan} ${rounding} opacity-70 hover:opacity-100 transition-opacity duration-300`}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
