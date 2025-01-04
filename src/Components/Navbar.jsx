import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
        <div className="navbar fixed bg-secondary/40 text-accent">
          <div className="navbar-start mr-10">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a className="font-bold" href="#home">Home</a></li>
                <li><a className="font-bold" href="#skills">Skills</a></li>
                <li><a className="font-bold" href="#experience">Experience</a></li>
                <li><a className="font-bold" href="#projects">Projects</a></li>
                <li><a className="font-bold" href="#blogs">Blogs</a></li>
                <li><a className="font-bold" href="#contact">Contact</a></li>
              </ul>
            </div>
            <Link to={'/'} className="text-2xl text-accent font-playfair font-extrabold">Afra Anjum.</Link>
          </div>
          <div className="navbar-center ">
            
          </div>
          <div className="navbar-end">
          <ul className="menu menu-horizontal hidden lg:flex px-1">
                <li><a className="font-bold" href="#home">Home</a></li>
                <li><a className="font-bold" href="#skills">Skills</a></li>
                <li><a className="font-bold" href="#experience">Experience</a></li>
                <li><a className="font-bold" href="#projects">Projects</a></li>
                <li><a className="font-bold" href="#blogs">Blogs</a></li>
                <li><a className="font-bold" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        </>
    );
};

export default Navbar;