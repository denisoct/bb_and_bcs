import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="top-0 flex w-full justify-between bg-slate-800 py-4 px-3 font-[Nunito]">
        <div className="flex gap-4">
          <Link className="text-white/70 no-underline" to="/">
            ASOCIACIONES
          </Link>

          <div className="ml-3 flex gap-5">
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

        <div className="flex gap-2">
          <span className="text-cyan-400">Denis Omar</span>
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
