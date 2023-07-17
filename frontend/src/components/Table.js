import React from "react";

const Table = ({ allShipmentsData, setAllShhipmentsData }) => {
  const converateTime = (time) => {
    const newTime = new Date(time);
    const formatTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
    return formatTime;
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg ">
            <h1 className="text-gray-800 text-xl font-bold sm:text-2xl">
              Created shipments
            </h1>
            <p className="text-gray-500 mt-2">
              List of all shipments created in the system.
            </p>
          </div>
          <div className=" mt-3 md:mt-0">
            <p
            //   onClick={() => setCreateShipmentMoldel(true)}
              href="javacript:vooid(0)"
              className="inline-block px-4 py-2  duration-150 font-normal bg-gray-800  hover:bg-gray-700 active:bg-gray-900 text-white md:text-sm rounded-lg md:inline-flex"
            >
              Add Tracking
            </p>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-hidden">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="px-6 py-3">Sender</th>
                <th className="px-6 py-3">Recevier</th>
                <th className="px-6 py-3">Pickuptime</th>
                <th className="px-6 py-3">Distance</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Waybill Time</th>
                <th className="px-6 py-3">Delivery Time</th>
                <th className="px-6 py-3">Paid</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {allShipmentsData?.map((shipment, idex) => {
                <tr key={idex}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.sender.slice(0, 15)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.recevier.slice(0, 15)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {converateTime(shipment.pickuptime)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.distance}km
                    </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {converateTime(shipment.price)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {converateTime(shipment.waybilltime)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {converateTime(shipment.deliverytime)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.isPaid ? "completed" : "Not completed"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {shipment.status == 0 ? "pending" : shipment.status == 1 ? "In Transit" : "Delivered"}
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>

    </>
  );
};
export default Table;
