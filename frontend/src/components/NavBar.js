import React, { useContext, useEffect, useState } from "react";
import { TrackingContext } from "../Context/TrackingContext";
import { Nav1, home, logoIsolated, logo} from "../components/index";



const NavBar = () => {

    const [state, setState] = useState(false);
    const { currentUser, connectWallet } = useContext(TrackingContext);

    const Navigation = [
        {titile: "Home", path: "#"},
        {titile: "Services", path: "#"},
        {titile: "About us", path: "#"},
        {titile: "Contact us", path: "#"},
    ];

    useEffect(() => {
        document.onclick =(e) =>{
            const target = e.target;
            if (!target.closest(".menu-btu")) setState(false)
        }
    }, []);

    return (
        <nav 
        className={`bg-white pb-5 md:text-sm ${
           state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0": " "
        }`}
        >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                <div className="flex items-center justify-between py-5 md:block">
                    <a href="javascript:void(0)">
                        <img
                        src={logoIsolated}
                        width={120}
                        height={50}
                        alt="Logo"
                        />
                    </a>
                    <div className="md:hidden">
                        <button className="menu-btu text-gray-500 hover:text-gray-800"
                            onclick ={() => setState(!state)}>
                                {state ? <Nav1 /> : <home />}
                        </button>
                    </div>
                </div>
                <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'}`}> 
                    <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {Navigation.map((item, idx) => {
                            return(
                          <li key={idx} className="text-gray-700 hover:text-gray-900">
                            <a href={item.path} className="block">
                                {item.titile}
                            </a>
                          </li>
                            );
                        } )};

                    </ul>
                    <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
                        {currentUser ? (<p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                            {currentUser.slice(0,5) + "..." + currentUser.slice(32) }
                        </p>) : (
                            <button onclick={() => {
                                connectWallet();
                            }} className="flex items-end">

                            </button>
                        )}
                    </div>
                </div>
            </div>
            NavBar
        </nav>
    )
};
export default NavBar; 