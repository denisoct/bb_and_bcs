import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="absolute top-0 flex w-full flex-row justify-between bg-slate-800 px-3 py-4 font-[Nunito]">
        <div className="flex gap-7">
          <Link className="text-white/70 no-underline" to="/">
            ASOCIACIONES
          </Link>

          <div className="flex gap-5  ">
            <NavLink
              className={({ isActive }) =>
                [
                  "text-slate-400 no-underline transition-all duration-200 ease-in-out hover:text-slate-300",
                  isActive ? "text-slate-50 hover:text-slate-50" : null,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              to="/breaking-bad"
            >
              Breaking Bad
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                [
                  "text-slate-400 no-underline transition-all duration-200 ease-in-out hover:text-slate-300",
                  isActive ? "text-slate-50 hover:text-slate-50" : null,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              to="/better-call-saul"
            >
              Better Call Saul
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                [
                  "text-slate-400 no-underline transition-all duration-200 ease-in-out hover:text-slate-300",
                  isActive ? "text-slate-50 hover:text-slate-50" : null,
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="flex gap-7">
          <div className="flex items-center gap-4">
            <span className="text-sm text-white">Developers:</span>
            <span className="text-cyan-400 hover:font-bold">
              <a
                href="https://github.com/ElvisJorge17"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jorge
              </a>
            </span>
            <span className="text-cyan-400 hover:font-bold">
              <a
                href="https://github.com/denisomarcuyottito"
                target="_blank"
                rel="noopener noreferrer"
              >
                Denis Omar
              </a>
            </span>
          </div>
          <button
            className="cursor-pointer border-none bg-inherit font-[Nunito] text-white hover:text-slate-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
