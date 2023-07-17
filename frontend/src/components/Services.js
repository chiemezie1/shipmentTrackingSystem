import React from "react";
import { StartShipment, Table, getapp, logo } from "../components/index";

const Services = ({
    createShipmentMoldel,
    setCreateShipmentMoldel,
    setCompleteModel,
    setGetModel,
    setStartModel,
}) => {

    const items = [
        {item: "Create Shipments"},
        {item: "StartShipments"},
        {item: "completeShipment"},
        {item: "getShipments"},
    ]
    const openModalBBox = (text) => {
        if (text === 1) {
            setCreateShipmentMoldel(true);}
        // } else if (text === 2) {
        //     setStartModel(true);
        // } else if (text === 3) {
        //     (true);
        //  } else if (text === 4) {
        //     setOpenProfile(true);
        // }
    };

    return (
        <>
        <section className=" py-0 pb-14">
            <div className="max-w-screen-sm mx-auto px-4 md:px-8">
            <div className="mt-12">
                <ul className="grid grid-6 space-y-2 sm:grid-cols2 md:flex md:space-y-0 md:space-x-4">
                    {items.map((item, index) => (
                        <li key={index}>    
                        <button onClick={() => openModalBBox(index + 1)} className="px-4 py-2 text-medium border border-green-500 hover:bg-green-500 text-gray-800 hover:text-white text-sm font-medium rounded-md">
                            <p>{item.item}</p>
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
            </div>
            <Table />
        </section>
        </>
    );
};
export default Services;
