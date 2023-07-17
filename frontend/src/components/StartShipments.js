import React, { useState } from "react";

const StartShipment = ({
    startModal, setStartModal, StartShipment
}) => {
    const [getProuct, setGetProduct] = useState({
        receiver: "",
        index: "",
    });
    
    const startshipment = async () => {
        await StartShipment(getProuct);
    };

    return startModal ?(
        <div className="fixed inset-0 z-10 overflow-y-auto">
            {/* <div className="fixed inset-0 w-full h-full bg-black opacity-40"
            onClick={() => setStartModal(false)}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative mx-auto w-full max-w-lg p-4 bg-white rounded-md shadow-lg">
                    <div className="flex justify-end">
                        <button
                        className="p-2 text-gray-400 hover:text-gray-100 rouneded-md"
                        onClick={() => setStartModal(false)}
                        >
                            <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="max-w-sm mx-auto py-3 space-y-3 text-center">
                        <h4 className=" text-lg font-medium text-gray-800">
                         start Shipment
                        </h4>
                        <p className="text-[15px] text-gray-500">
                           start shipment with blockchain and Ethereum blockchain in fast Transparent and secure way 
                        </p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="relative mt-3">
                                 <input 
                             type="text"
                             placeholder="receiver"
                             onChange={(e) => setGetProduct({...getProuct, receiver: e.target.value})}
                             className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                             />
                            </div>
                            <div className="relative mt-3">
                                <input 
                                type="text"
                                placeholder="Id"
                                onChange={(e) => setGetProduct({...getProuct, index: e.target.value})}
                                className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <button type="submit" onClick={() => startshipment()} className="block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2">
                                Start details
                            </button>
                        </form>
                    </div>
                </div>
            </div> */}
        </div>
    ): ('');
};
export default StartShipment; 