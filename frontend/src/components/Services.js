import React from "react";
import { getapp, logo } from "../components/index";

const Services = ({
  setOpenProfile,
  setCompleteModel,
  setGetModel,
  setStartModel,
}) => {

    
    const openModalBBox = (text) => {
        if (text === 1) {
            setCompleteModel(true);
        } else if (text === 2) {
            setGetModel(true);
        } else if (text === 3) {
            setStartModel(true);
        } else if (text === 4) {
            setOpenProfile(true);
        }
    };


  return <div>Services</div>;
};
export default Services;
