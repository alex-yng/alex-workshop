import ProjectCard from "../components/HomeComponents/ProjectCard";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="text-light container mx-auto grid place-items-center h-screen">
        {/* Hero Content */}
        <div className="grid grid-rows-2 grid-cols-3 items-baseline gap-4">
          <h1 className="text-9xl tracking-wider col-span-3">THE WORKSHOP</h1>
          <h3 className="text-xl tracking-widest text-violet">by alex.yng</h3>
          <div className="max-w-fit justify-self-center text-xl opacity-80 hover:opacity-100 pr-4">
            <Nav
              links={[{ name: "see more", path: "#projects" }]}
              fontWeight="thin"
            />
          </div>
          <div className="max-w-fit justify-self-end text-xl pr-4">
            <Nav
              links={[{ name: "about", path: "/about" }]}
              fontWeight="thin"
            />
          </div>
        </div>
      </div>

      {/* Project View */}
      <div
        id="projects"
        className="grid grid-cols-2 place-items-center container mx-auto p-16 gap-8"
      >
        <div className="my-20 opacity-80 hover:scale-105 hover:opacity-100 transition-[transform,opacity] duration-500">
          <ProjectCard text="to-do List" link="/todo" />
        </div>
        <div className="my-20 opacity-80 hover:scale-105 hover:opacity-100 transition-[transform,opacity] duration-500">
          <ProjectCard text="calculator" link="/calculator" />
        </div>
      </div>
    </>
  );
}
