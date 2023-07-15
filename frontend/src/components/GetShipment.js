import React, { useState } from "react";

const GetShipment = ({ getShipment, setGetModel, getModel }) => {
  const [index, setIndex] = useState(0);
  const [singleShipment, setSingleShipment] = useState();

  const getShipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipment(getData);
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
      <div
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
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default GetShipment;
