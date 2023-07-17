import React, { useState, useEffect } from "react";

const Profile = ({
  openProfile,
  setOpenProfile,
  currentUser,
  getShipmentCount,
  getAccountBalance,
}) => {
  const [count, setCount] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allData = await getShipmentCount();
        setCount(allData);
        const balanceData = await getAccountBalance();
        setBalance(balanceData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return openProfile ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={() => setOpenProfile(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative mx-auto w-full max-w-lg bg-white rounded-md shadow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 hover:text-gray-100 rouneded-md"
              onClick={() => setOpenProfile(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="max-w-md mx-auto py-4 px-6 text-center">
            <div className="flex flex-col items-center pb-10">
              <image
                className="w-24 h-24 rounded-full shadow-lg"
                src={currentUser.image}
                alt="profile"
              />
              <h3 className="mb-2 text-xl font-medium text-gray-900">welcome Tracker</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {currentUser}
              </span>
              <div className="flex mt-4 space-x-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border-2 text-black font-medium rounded-lg text-center"
                >
                  Balance: {balance ? `${balance} ETH` : "0"}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border-2 text-black font-medium rounded-lg text-center"
                >
                  Total Shipment: {count ? `${count}` : "0"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Profile;
