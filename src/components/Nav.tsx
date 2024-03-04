export default function Nav({
  fontWeight = "light",
  textColor = "light",
  links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ],
}) {
  return (
    <>
      <nav className={`flex gap-4 text-xl font-${fontWeight} tracking-widest`}>
        {links.map((link) => {
          return (
            <>
              <div className="group">
                <a
                  className="hover:text-slate-400  group-hover:text-violet transition-colors duration-500"
                  href={link.path}
                >
                  {link.name}
                </a>
                <hr
                  className={`text-${textColor} w-0 group-hover:w-full transition-[width] duration-300`}
                ></hr>
              </div>
            </>
          );
        })}
      </nav>
    </>
  );
}
