export default function Nav({ links = ["To-Do", "Calculator", "About"] }) {
  return (
    <>
      <nav className="flex gap-4 text-x font-semibold tracking-wide">
        {links.map((link) => {
          return (
            <>
              <div className="group">
                <a className="hover:text-slate-400 transition-colors duration-300">
                  {link}
                </a>
                <hr className="text-light w-0 group-hover:w-full transition-[width] duration-300"></hr>
              </div>
            </>
          );
        })}
      </nav>
    </>
  );
}
