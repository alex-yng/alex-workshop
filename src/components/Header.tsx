import Nav from "./Nav";

export default function Header({ title = "" }) {
  return (
    <>
      <div className="grid place-items-center place-content-center grid-cols-3 bg-dark text-light py-4">
        <h1 className="text-4xl font-semibold">Workshop</h1>
        <h2 className="text-5xl font-extrabold tracking-wide">{title}</h2>
        <Nav />
      </div>
    </>
  );
}
