import React, { useState } from "react";

const GetShipment = ({ getShipment, setGetModel, getModel}) => {
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
    }
    return getModel ? (
        <div>
            GetShipment
        </div>
    ):("");
};
export default GetShipment; 