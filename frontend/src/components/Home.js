import React from "react";
import { Link } from "react-router-dom";
import { hero } from "../components/index";

const Home = () => {
    return(
        <home class="text-gray-600 body-font">
        <div class="container mx-auto flex px-10 py-4 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Shipment Tracking with Blockchain
              <br class="hidden lg:inline-block" />Secure and Transparent 
            </h1>
            <p class="mb-8 leading-relaxed">Real-time visibility and transparency for your shipments using blockchain technology</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                <Link to ="/services"> Get Started </Link>
                </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
            <img class="object-cover object-center rounded" alt="hero" src={hero}/>
          </div>
        </div>
      </home>
    )
};
export default Home; 