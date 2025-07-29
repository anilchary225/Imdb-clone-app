import React from "react";
import Logo from "../logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between border-b px-4 py-3 bg-black">
      <div className="flex items-center space-x-4">
        <img src={Logo} className="w-[50px]" alt="Imdb Logo" />
        <Link to="/" className="text-yellow-500 text-2xl sm:text-3xl font-bold">
          Home
        </Link>
        <Link to="/watchlist" className="text-yellow-500 text-2xl sm:text-3xl font-bold">
          Watchlist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
