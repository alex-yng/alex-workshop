export default function Nav({
  links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ],
  fontWeight = "semibold",
}) {
  return (
    <>
      <nav className={`flex gap-4 text-x font-${fontWeight} tracking-widest`}>
        {links.map((link) => {
          return (
            <>
              <div className="group">
                <a
                  className="hover:text-slate-400 transition-colors duration-300"
                  href={link.path}
                >
                  {link.name}
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
