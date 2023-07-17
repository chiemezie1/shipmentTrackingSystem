import React, {useState} from "react";

const Form = (
    {createShipmentMoldel,
    setCreateShipmentMoldel,
    createShipment,}
) => {
    const [shipment, setShipment] = useState({
        receiver: "",
        pickUpTime: "",
        distance: "",
        price: "",
    });
    const createItem = async () => {
        try{
            await createShipment(shipment);
        }catch(error){
            console.log("something went wrong", error);
        }
    };

    return createShipmentMoldel ? (
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full bg-black opacity-40"
            onClick={() => setCreateShipmentMoldel(false)}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative mx-auto w-full max-w-lg bg-white rounded-md">
                    <div className="flex justify-end">
                        <button
                        className="p-2 text-gray-400 hover:text-gray-100 rouneded-md"
                        onClick={() => setCreateShipmentMoldel(false)}
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
                            Track produuct and Create Shipment
                        </h4>
                        <p className="text-[15px] text-gray-500">
                            Create shipment tracking with blockchain and Ethereum blockchain in fast Transparent and secure way 
                        </p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="relative mt-3">
                                 <input 
                            type="text"
                            placeholder="receiver"
                            className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            onChange={(e) => setShipment({...shipment, receiver: e.target.value})}>
                            </input>
                            </div>
                            <div className="relative mt-3">
                                <input 
                                type="date"
                                placeholder="pickuptime"
                                className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                onChange={(e) => setShipment({...shipment, pickUpTime: e.target.value})}>
                                </input>
                            </div>
                           <div className="relative mt-3">
                                <input
                                type="text"
                                placeholder="distance"
                                className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                onChange={(e) => setShipment({...shipment, distance: e.target.value})}>
                                </input>
                           </div>
                           <div className="relative mt-3"> 
                           <input
                                type="text"
                                placeholder="price"
                                className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                onChange={(e) => setShipment({...shipment, price: e.target.value})}>
                                </input>
                           </div>
                           <button onClick={() => createItem()} className=" block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2">
                                Create shipment
                           </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    ) :("");
};
export default Form;