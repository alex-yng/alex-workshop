export default function ProjectCard({ text = "" }) {
  return (
    <div className=" bg-black size-[32rem] rounded-3xl text-light grid place-items-center">
      <div>
        <img className="aspect-square size-80" />
        <h1 className="text-2xl">{text}</h1>
      </div>
    </div>
  );
}
