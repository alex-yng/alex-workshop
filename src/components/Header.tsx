import Nav from "./Nav";

export default function Header({
  title = "",
  links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ],
}) {
  return (
    <>
      <div className="grid place-items-center place-content-center grid-cols-3 text-light py-4">
        <h1 className="text-2xl font-thin tracking-wider text-light">
          <a href="/">Workshop</a>
        </h1>
        <h2 className="text-5xl font-normal tracking-wider">{title}</h2>
        <Nav links={links} />
      </div>
    </>
  );
}
