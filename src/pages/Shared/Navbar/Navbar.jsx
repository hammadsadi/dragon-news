import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className="font-popins font-normal md:text-lg text-base"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="font-popins font-normal md:text-lg text-base"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/career"
          className="font-popins font-normal md:text-lg text-base"
        >
          Career
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end space-x-2">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <button className="bg-dark-02 cursor-pointer py-[6px] px-6  font-semibold text-lg md:text-xl text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
