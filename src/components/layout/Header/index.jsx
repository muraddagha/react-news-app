// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import Filter from "../Filter";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 p-0 my-10">
        <div className="flex-1">
          <Link to={"/"} className="text-xl p-0">
            <span className="bg-black rounded-sm text-white p-1">News</span>
            Portal
          </Link>
        </div>
        <div className="flex-none">
          <Link to={"/for-you"} className="btn btn-ghost underline text-md">
            For you
          </Link>
          <Filter />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
