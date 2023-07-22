import React from "react";
import { getapp, logo } from "../components/index";

const Footer = () => {
    const footerItems = [
        {
            href: "javascript:void(0)",
            name: "Terms",
        },
        {
            href: "javascript:void(0)",
            name: "Privacy",
        },
        {
            href: "javascript:void(0)",
            name: "License",
        },
        {
            href: "javascript:void(0)",
            name: "Contact us",
        },
        {
            href: "javascript:void(0)",
            name: "About us",
        },
        {
            href: "javascript:void(0)",
            name: "Support",
        },
    ];

    return (
        <footer className="pt-5">
            <div className="mx-auto flex  px-4 text-gray-600 md:px-8">
                <div className="justify-between items-end sm:flex flex-grow">
                    <div className="space-y-4">
                        <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                            <img src={logo} width={70} height={20} alt="Logo" className="" />
                            {footerItems.map((item, index) => (
                                <li
                                    className="text-gray-800 hover:text-gray-500 duration-150"
                                    key={index}
                                >
                                    <a href={item.href} className="hover:underline">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-center font-medium">Get App</p>
                    <div className="flex items-center gap-3 mt-3 sm:block">
                        <a href="javascript:void(0)">
                            <img
                                src={getapp}
                                width={120}
                                height={100}
                                alt="Logo"
                                className="bg-gray-800 rounded-lg"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-2 py-4 border-t text-center md:flex md:justify-center">
                <p className="max-w-md">
                    &copy; {new Date().getFullYear()} Absolute Shipment and Trucking. All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};
export default Footer;
