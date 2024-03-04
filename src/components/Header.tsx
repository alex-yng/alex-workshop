import Nav from "./Nav";

export default function Header({
  title = "",
  textColor = "text-light",
  bgColor = "bg-dark",
  links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
  ],
}) {
  return (
    <>
      <div
        className={`grid place-items-center place-content-center grid-cols-3 py-4 ${textColor} ${bgColor}`}
      >
        <h1 className="text-2xl font-thin tracking-wider text-light">
          <a href="/">Workshop</a>
        </h1>
        <h2 className="text-5xl font-normal tracking-wider">{title}</h2>
        <Nav links={links} textColor={textColor} />
      </div>
    </>
  );
}
