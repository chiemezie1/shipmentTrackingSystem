import React, { useState, useEffect } from "react";
import { Web3Modal } from "@web3modal/react";
import { Signer, ethers } from "ethers";
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
        const { receiver, pickUpTime, distance, price } = items
    }

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
            });
            await createItem.wait();

    }catch (error) {
        console.log("something went wrong",error)
    }
}