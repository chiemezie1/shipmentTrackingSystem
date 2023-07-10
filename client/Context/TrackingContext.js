import React, { useState, useEffect } from "react";
import { Web3Modal } from "@web3modal/react";
import { Signer, errors, ethers } from "ethers";
import ShipmentTracking from "../Contract/ShipmentTracking.json";

const fatchCcontract = (SignerOrProvider) => {
    new ethers.Contract(
        ShipmentTracking.address,
        ShipmentTracking.abi,
        SignerOrProvider
    );
};

export const TrackingContext = React.createContext();


export const TrackingProvider = async ({ children }) => {
    const DAppName = "shipment Tracking";
    const [currentUser, setCurrentUser] = useState("");

    const createShipment = async (items) => {
        const { receiver, pickUpTime, distance, price } = items;
    };

    try {
        const web3modal = new web3modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        const contract = fatchCcontract(signer);
        const createItem = contract.createShipment(
            receiver,
            new Date(pickUpTime).getTime(),
            distance,
            ethers.utils.parseUnits(price, 18),
            {
                value: ethers.utils.parseUnits(price, 18),
            }
        );
        await createItem.wait();
    } catch (error) {
        console.log("something went wrong", error);
    }
};


const getAllshipment = async () => {
    try {
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fatchCcontract(provider);

        const shipments = await contract.getAllTransactions();
        const allShipment = shipments.map((shipment) => ({
            sender: shipment.sender,
            receiver: shipment.receiver,
            sentTime: shipment.sentTime.toNumber(),
            deliveryTime: shipment.deliveryTime.toNumber(),
            pickUpTime: shipment.pickUpTime.toNumber(),
            distance: shipment.distance.toNumber(),
            price: ethers.utils.formatEther(shipment.price.toString()),
            status: shipment.status,
            isPaid: shipment.isPaid,
        }));
        return allShipment;
    }
    catch (error) {
        console.log("Something went wrong getting shipment" + error);
    }
};

