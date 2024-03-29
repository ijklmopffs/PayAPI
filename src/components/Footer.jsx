import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo-white.svg";

export default function Footer() {
  const [facebookState, setFacebookState] = useState("#FBFCFE");
  const [twitterState, setTwitterState] = useState("#FBFCFE");
  const [linkedinState, setLinkedinState] = useState("#FFF");

  return (
    <>
      <section className=" bg-[#edf3e8] p-20">
        <div className="md:max-w-[80%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between relative">
            <h2 className="text-5xl text-sanJuanBlue">Ready to start?</h2>
            <div className="md:relative flex flex-col md:block gap-2 md:gap-0">
              <input
                type="email"
                placeholder="Enter email address"
                className="px-6 p-3 shadow-2xl rounded-full text-sanJuanBlue text-sm font-sans w-[25rem] my-2"
              />
              <button className="text-waterWhite bg-darkPink px-6 p-3 rounded-full md:absolute right-0 top-1">
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="p-10 bg-mirageBlue">
        <div className="md:max-w-[80%] mx-auto flex flex-col md:flex-row gap-10 md:gap-0 items-center justify-between">
          <div className="flex flex-col md:flex-row items-center gap-8 font-sans font-bold text-sm text-waterWhite">
            <img src={logo} alt="" />
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link>
              <svg width="24" height="24">
                <path
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
                  onMouseEnter={() => {
                    setFacebookState("#ba4270");
                  }}
                  onMouseLeave={() => {
                    setFacebookState("#FBFCFE");
                  }}
                  fill={facebookState}
                  fillRule="nonzero"
                />
              </svg>
            </Link>
            <Link>
              <svg width="24" height="20">
                <path
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                  fillRule="nonzero"
                  onMouseEnter={() => {
                    setTwitterState("#ba4270");
                  }}
                  onMouseLeave={() => {
                    setTwitterState("#FBFCFE");
                  }}
                  fill={twitterState}
                />
              </svg>
            </Link>
            <Link>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"
                  fillRule="nonzero"
                  onMouseEnter={() => {
                    setLinkedinState("#ba4270");
                  }}
                  onMouseLeave={() => {
                    setLinkedinState("#FFF");
                  }}
                  fill={linkedinState}
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
