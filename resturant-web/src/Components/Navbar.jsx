import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
      <div className="fixed z-10 navbar px-8 bg-white/80 shadow-md text-black h-[80px] sm:h-[80px] md:h-[80px] lg:h-[90px] border-b-2">
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
              className="menu menu-sm sm:menu-md md:menu-lg dropdown-content bg-white/90 text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
              <Link
              to="/"
              onClick={() => document.activeElement.blur()}
              >Home</Link>
            </li>
            
            <li>
              <Link
              onClick={() => document.activeElement.blur()}
              >Timing</Link>
            </li>
            
            <li>
              <Link
              onClick={() => document.activeElement.blur()}
              >Menu</Link>
            </li>
            
            <li>
              <Link
              to="/about"
              onClick={() => document.activeElement.blur()}
              >About us</Link>
            </li>
            <li>
              <Link
              onClick={() => document.activeElement.blur()}
              >Contact us</Link>
            </li>

            </ul>
          </div>
          <a className="text-textcolor font-bold font-merriweather text-lg sm:text-2xl md:text-3xl lg:text-4xl">PERTH RETREAT</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu-horizontal px-1 lg:gap-x-8">
          <li>
              <Link
              to="/"
              className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >Home</Link>
            </li>          
            
            <li>
              <Link
              className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >Timing</Link>
            </li>          
            
            <li>
              <Link
              className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >Menu</Link>
            </li>          
            
            <li>
              <Link
              to="/about"
              className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >About us</Link>
            </li>          

            <li>
              <Link
              className="lg:text-xl font-semibold hover:text-textcolor hover:underline"
              >Contact us</Link>
            </li>          
          
          </ul>
        </div>
        <div className="navbar-end">
          <h2 className="text-textcolor font-bold text-sm sm:text-lg md:text-xl lg:text-3xl">0141 611 3159</h2>
        </div>
      </div>
    );
  }
  