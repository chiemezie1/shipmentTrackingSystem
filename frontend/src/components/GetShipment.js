import React, { useState } from "react";

const GetShipment = ({ getShipment, setGetModel, getModel }) => {
  const [index, setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
  };

  const convertTime = (time) => {
    const newTime = new Date(time);
    const formatTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
    return formatTime;
  };
  return getModel ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      {/* <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setGetModel(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative mx-auto w-full max-w-lg bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 hover:text-gray-100 rouneded-md"
              onClick={() => setGetModel(false)}
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
            <div className="text-lg font-medium text-gray-800">
              <h4 className=" text-lg font-medium text-gray-800">
                Products Tracking details
              </h4>
              <form onClick={(e) => e.preventDefault()}>
                <div className="relative mt-3">
                  <input
                    type="number"
                    placeholder="id"
                    className="w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    onChange={(e) => setIndex(e.target.value)}
                  />
                </div>
                <buttton
                  onClick={() => getShipmentData()}
                  className="w-full block mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2"
                >
                  Get details
                </buttton>
              </form>
              {singleShipmentData == undefined ? (
                ""
              ) : (
                <div className="text-left">
                  <p>Sender: {singleShipmentData.sender.slice(0, 25)}...</p>
                  <p>Receiver: {singleShipmentData.receiver.slice(0, 25)}...</p>
                  <p>PickUpTime: {singleShipmentData.pickUpTime}</p>
                  <p>DeliveryTime: {singleShipmentData.deliveryTime}</p>
                  <p>Distance: {singleShipmentData.distance}</p>
                  <p>Price: {singleShipmentData.price}</p>
                  <p>Status: {singleShipmentData.status}</p>
                  <p>
                    Paid:{" "}
                    {singleShipmentData.paid ? "completed" : "Not completed"}
                  </p>
                </div>
              )}
              ;
            </div>
          </div>
        </div>
      </div> */}
    </div>
  ) : (
    ""
  );
};
export default GetShipment;
