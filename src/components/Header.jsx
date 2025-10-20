import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-sky-950 p-4 shadow-lg text-white">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <ul className="flex flex-wrap space-x-6 text-lg text-center">
          <NavLink to={"/"} className={({isActive}) => 
            isActive ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1" 
            : "text-white hover:text-yellow-200 transition duration-300"}>
            Home
          </NavLink>
          <NavLink to={"/about"} className={({isActive}) => 
            isActive ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1" 
            : "text-white hover:text-yellow-200 transition duration-300"}>
            About
          </NavLink>
          <NavLink to={"/blog"} className={({isActive}) => 
            isActive ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1" 
            : "text-white hover:text-yellow-200 transition duration-300"}>
            Blog
          </NavLink>
          <NavLink to={"/contact"} className={({isActive}) => 
            isActive ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1" 
            : "text-white hover:text-yellow-200 transition duration-300"}>
            Contact
          </NavLink>
          <NavLink to={"/dashboard"} className={({isActive}) => 
            isActive ? "text-yellow-300 font-bold border-b-2 border-yellow-300 pb-1" 
            : "text-white hover:text-yellow-200 transition duration-300"}>
            Dashboard
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Header;