import Header from "../components/Header";
import ProjectCard from "../components/HomeComponents/ProjectCard";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="text-light container mx-auto text-center grid place-items-center h-screen">
        {/* Hero Content */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-9xl tracking-wider">THE WORKSHOP</h1>
          <h3 className="text-xl tracking-widest">by Alex Young</h3>
          <Nav
            links={[{ name: "Read more", path: "/about" }]}
            fontWeight="thin"
          />
        </div>
      </div>

      {/* Project View */}
      <div className="grid grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}
