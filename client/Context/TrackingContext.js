import React, { useState, useEffect } from "react";
import { Web3Modal } from "@web3modal/react";
import { Signer, errors, ethers } from "ethers";
import ShipmentTracking from "../Contract/ShipmentTracking.json";

const fetchContract = (SignerOrProvider) => {
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
        const web3Modal = new web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();

        const contract = fetchContract(signer);
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
        const contract = fetchContract(provider);

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

const getShipmentCount = async () => {
    try {
        if (!window.ethereum) { return "please install MetaMask" };
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const shipmentCount = await contract.getShipmentCount(accounts[0]);
        return shipmentCount.toNumber;
    } catch (error) {
        console.log("Something went wrong getting shipmentCount" + error);
    }
};

const completeShipment = async (shipmentData) => {
    const { receiver, index } = shipmentData;

    try {
        if (!window.ethereum) { return "please install MetaMask" };
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const web3Modal = new web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const Signer = provider.getSigner();
        const contract = fetchContract(Signer);

        const transaction = await contract.completeShipment(
            accounts[0],
            receiver,
            index,
            {
                gasLimit: 40000,
            }
        );

        transaction.wait();

    } catch (error) {

        console.log("Something went wrong" + error);
    }
}


const getShipment = async (index) => {
    try {
        if (!window.ethereum) { return "please install MetaMask" };
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const provider = new ethers.providers.JsonRpcProvider();
        const contract = fetchContract(provider);
        const shipment = await contract.getShipment(accounts[0], index * 1);
        shipment.wait();
        const shipmentData = {
            sender: shipment[0],
            receiver: shipment[1],
            deliveryTime: shipment[3],
            pickUpTime: shipment[4],
            distance: shipment[5],
            price: shipment[6],
            status: shipment[7],
            isPaid: shipment[8],
        }
        return shipmentData;
    }catch{

    }
}