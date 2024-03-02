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
      <div className="grid place-items-center place-content-center grid-cols-3 bg-dark text-light py-4">
        <h1 className="text-4xl font-medium">
          <a href="/">Workshop</a>
        </h1>
        <h2 className="text-5xl font-semibold tracking-wide">{title}</h2>
        <Nav links={links} />
      </div>
    </>
  );
}
