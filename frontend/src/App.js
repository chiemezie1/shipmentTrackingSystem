import "./App.css";

//starting

import React, { useState, useEffect, useContext } from "react";

import {
  Footer,
  CompleteShipment,
  Form,
  GetShipment,
  NavBar,
  Profile,
  Services,
  StartShipment,
  Table,
} from "./components/index";

import { TrackingContext } from "./Context/TrackingContext";

function App() {


  const {
    DAppName,
    currentUser,
    connectWallet,
    startShipment,
    getShipment,
    completeShipment,
    getShipmentCount,
    getAllshipment,
    createShipments,
  } = useContext(TrackingContext);

  const [createShipmentMoldel, setCreateShipmentMoldel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [StartModel, setStartModel] = useState(false);
  const [completeModel, setCompleteModel] = useState(false);
  const [getModel, setGetModel] = useState(false);

  const [allShipmentsData, setAllShhipmentsData] = useState();


  useEffect(() => {
    const getCampaignsData = getAllshipment();

    return async () => {
      const allData = await getCampaignsData;
      setAllShhipmentsData(allData);
    };
  }, []);



  return (
    <>
      <NavBar />

      <Services
        setOpenProfile={setOpenProfile}
        setCompleteModel={setCompleteModel}
        setGetModel={setGetModel}
        setStartModel={setStartModel}
      />

      <Table 
        setAllShhipmentsData ={setAllShhipmentsData}
        allShipmentsData ={allShipmentsData}
      />

      <Form 
        createShipmentMoldel ={createShipmentMoldel}
        setCreateShipmentMoldel ={setCreateShipmentMoldel}
        createShipments ={createShipments}
      />      

      <Profile 
        openProfile ={openProfile}
        setOpenProfile ={setOpenProfile}
        currentUser ={currentUser}
        getShipmentCount ={getShipmentCount}
      />

      <CompleteShipment 
        completeModel ={completeModel}
        setCompleteModel ={setCompleteModel}
        completeShipment ={completeShipment}
      />

      <GetShipment 
        getModel ={getModel}
        setGetModel ={setGetModel}
        getShipment ={getShipment}
      />

      <StartShipment 
        StartModel ={StartModel}
        setStartModel ={setStartModel}
        startShipment ={startShipment}
      />
      <Footer />
    </>
  );
}

export default App;
