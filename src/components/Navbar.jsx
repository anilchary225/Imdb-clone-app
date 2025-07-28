import React from "react";
import Logo from "../logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img src={Logo} className="w-[50px]" alt="Imdb Logo" />

      <Link to="/" className="text-yellow-600 text-3xl font-bold" >Home</Link>

      <Link to="/watchlist" className="text-yellow-600 text-3xl font-bold" >Watchlist</Link>
    </div>
  );
};

export default Navbar;
