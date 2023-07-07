// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ShipmentTracking {
    struct Shipment {
        address sender;
        address receiver;
        uint256 sentTime;
        uint256 deliveryTime;
        uint256 pickUpTime;
        uint256 distance;
        uint256 price;
        shipmentStatus status;
        bool isPaid;
    }

    enum shipmentStatus {
        PENDING,
        IN_TRANSIT,
        DELIVERED
    }

    uint256 public shipmentCount;
    mapping(address => Shipment[]) public shipments;

    event shipmentCreated(
        address indexed sender,
        address indexed receiver,
        uint256 sentTime,
        uint256 pickUpTime,
        uint256 distance,
        uint256 price
    );
    event shipmentInTransit(
        address indexed sender,
        address indexed receiver,
        uint256 sentTime,
        uint256 pickUpTime
    );
    event shipmentDelivered(
        address indexed sender,
        address indexed receiver,
        uint256 deliveryTime
    );
    event shipmentPaid(
        address indexed sender,
        address indexed receiver,
        uint256 amount
    );

    constructor() {
        shipmentCount = 0;
    }

    function createShipment(
        address _receiver,
        uint256 _pickUpTime,
        uint256 _distance,
        uint256 _price
    ) public payable {
        require(msg.value == _price, "Invalid amount");
        Shipment memory shipment = Shipment(
            msg.sender,
            _receiver,
            0,
            0,
            _pickUpTime,
            _distance,
            _price,
            shipmentStatus.PENDING,
            false
        );
        shipments[msg.sender].push(shipment);
        shipmentCount++;

        emit shipmentCreated(
            msg.sender,
            _receiver,
            0,
            _pickUpTime,
            _distance,
            _price
        );
    }

    function startShipment(
        address _sender,
        address _receiver,
        uint256 _index
    ) public {
        Shipment storage shipment = shipments[_sender][_index];
        require(
            shipment.status == shipmentStatus.PENDING,
            "No pending shipment"
        );
        require(shipment.receiver == _receiver, "Invalid Receiver");
        shipment.status = shipmentStatus.IN_TRANSIT;

        emit shipmentInTransit(_sender, _receiver, now, shipment.pickUpTime);
    }

    function completeShipment(
        address _sender,
        address _receiver,
        uint256 _index
    ) public {
        Shipment storage shipment = shipments[_sender][_index];
        require(
            shipment.status == shipmentStatus.IN_TRANSIT,
            "Shipment not in transit"
        );
        require(shipment.receiver == _receiver, "Invalid Receiver");
        require(!shipment.isPaid, "Shipment already paid");
        shipment.status = shipmentStatus.DELIVERED;
        shipment.deliveryTime = block.timestamp;

        uint256 amount = shipment.price;
        payable(shipment.sender).transfer(amount);
        shipment.isPaid = true;

        emit shipmentDelivered(
            shipment.sender,
            _receiver,
            shipment.deliveryTime
        );

        emit shipmentPaid(shipment.sender, _receiver, amount);
    }

    function getShipment(
        address _sender,
        uint256 _index
    )
        public
        view
        returns (
            address,
            address,
            uint256,
            uint256,
            uint256,
            uint256,
            shipmentStatus,
            bool
        )
    {
        Shipment memory shipment = shipments[_sender][_index];
        return (
            shipment.sender,
            shipment.receiver,
            shipment.deliveryTime,
            shipment.pickUpTime,
            shipment.distance,
            shipment.price,
            shipment.status,
            shipment.isPaid
        );
    }

    function getShipmentCount(address _address) public view returns (uint256) {
        return shipments[_address].length;
    }

    function getAllTransaction() public view returns (typeShipment[] memory) {
        return typeShipments;
    }
}
