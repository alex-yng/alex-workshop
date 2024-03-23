export default function ProjectCard({ text = "", link = "" }) {
  return (
    <div className='text-light'>
      <a href={link}>
        <h1 className='text-2xl'>{text}</h1>
      </a>
    </div>
  );
}
