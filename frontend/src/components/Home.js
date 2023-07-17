import React from "react";
import { Link } from "react-router-dom";
import { hero } from "../components/index";
import { Steps } from "../components/index";



const Home = ({setOpenProfile}) => {
  return (
    <home className="text-gray-600 body-font">
      <div class="bg-white flex justify-end items-end pr-8">
        <button onClick={() => setOpenProfile(true)} class="px-3 py-1 bg-gradient-to-r from-green-500 to-green-600 hover:opacity-80 text-white text-sm font-medium rounded-md">
          Profile veiw
        </button>
      </div>
      <div className="container mx-auto flex px-10 py-4 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {" "}
            Shipment Tracking with Blockchain
            <br className="hidden lg:inline-block" />
            Secure and Transparent
          </h1>
          <p className="mb-8 leading-relaxed">
            Real-time visibility and transparency for your shipments using
            blockchain technology
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              <Link to="/services"> Get Started </Link>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={hero}
          />
        </div>
      </div>
      <Steps />
    </home>
  );
};
export default Home;
