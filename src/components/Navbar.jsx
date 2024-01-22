import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import hamburger from "../assets/shared/mobile/menu.svg";
import close from "../assets/shared/mobile/close.svg";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="flex items-center justify-between gap-8 font-sans font-bold text-sm relative z-10">
      <Link to="/">
        <div>
          <img src={logo} alt="" />
        </div>
      </Link>
      <div
        className={
          nav
            ? "flex flex-col md:flex-row gap-4 md:gap-0 absolute md:static bg-mirageBlue md:bg-transparent -top-2 items-center md:justify-between w-4/5 md:w-full -right-4 h-screen md:h-auto transition-all ease-in-out duration-700"
            : "flex flex-col md:flex-row gap-4 md:gap-0 absolute md:static bg-mirageBlue md:bg-transparent -top-2 items-center md:justify-between w-4/5 md:w-full right-[-100%] h-screen md:h-auto transition-all ease-in-out duration-700"
        }
      >
        <button
          className="flex self-end m-4 md:hidden"
          onClick={() => setNav(!nav)}
        >
          <img src={close} alt="" />
        </button>
        <div className="flex flex-col mt-40 md:mt-0 md:flex-row gap-8 text-waterWhite md:text-sanJuanBlue">
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <button className="text-waterWhite bg-darkPink px-6 p-3 rounded-full hover:opacity-70">
            Schedule a Demo
          </button>
        </div>
      </div>
      <div className="md:hidden">
        <button onClick={(nav) => setNav(nav)}>
          <img src={hamburger} alt="" />
        </button>
      </div>
    </nav>
  );
}
