const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  
  const shipmentTracking = await hre.ethers.getContractFactory("ShipmentTracking");
  const ShipmentTracking = await shipmentTracking.deploy();

  await ShipmentTracking.deployed(); // Use the deployed contract instance

  console.log("ShipmentTracking deployed to:", ShipmentTracking.address);

  const data = {
    address: ShipmentTracking.address,
    abi: JSON.parse(ShipmentTracking.interface.format('json'))
  };

  //This writes the ABI and address to the eShipmentTracking.json
  fs.writeFileSync('./client/Contract/ShipmentTracking.json', JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });