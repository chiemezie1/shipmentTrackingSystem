import React, { useContext, useEffect, useState } from "react";
import { TrackingContext } from "../Context/TrackingContext";
import { Nav, cancel, logo } from "../components/index";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [state, setState] = useState(false);
  const { currentUser, connectWallet } = useContext(TrackingContext);

  const Navigation = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/services" },
    { title: "About us", path: "/about" },
    { title: "Contact us", path: "/contact" },
  ];
  

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btu")) setState(false);
    };
  }, []);

  return (
    <nav
      className={`bg-white pb-5 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0"
          : ""
      }`}
    >
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block">
          <Link  to="/">
            <img src={logo} width={70} height={20} alt="Logo" />
          </Link>

          <div className="md:hidden">
            <button
              className="menu-btu text-gray-500 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <img src={cancel} width={40} height={20} alt="Logo" className="bg-gray-800 rounded-lg" />
              ) : (
                <img src={Nav} width={40} height={20} alt="Logo" className="bg-gray-800 rounded-lg"/>
              )}
            </button>
          </div>

        </div>


        <div
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {Navigation.map((item, idx) => (
              <li key={idx} className="text-gray-700 hover:text-gray-900">
                <Link to={item.path} className="block">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            {currentUser ? (
              <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                {currentUser.slice(0, 5) + "..." + currentUser.slice(36)}
              </p>
            ) : (
              <button
                onClick={() => {
                  connectWallet();
                }}
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
