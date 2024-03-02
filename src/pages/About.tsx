import Header from "../components/Header";

export default function About() {
  return (
    <div className="overflow-hidden grid">
      <Header links={[{ name: "Home", path: "/" }]} />
    </div>
  );
}
