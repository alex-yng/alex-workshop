export default function ProjectCard({ text = "", link = "" }) {
  return (
    <div className=" bg-black size-[32rem] rounded-3xl text-light grid place-items-center">
      <a href={link}>
        <img className="aspect-square size-80" />
        <h1 className="text-2xl">{text}</h1>
      </a>
    </div>
  );
}
