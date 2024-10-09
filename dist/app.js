"use strict";
var Vehicle;
(function (Vehicle) {
    Vehicle["CAR"] = "CAR";
    Vehicle["BIKE"] = "BIKE";
    Vehicle["TRUCK"] = "TRUCK";
})(Vehicle || (Vehicle = {}));
const vehicleDescription = (vehicleType, vehicleModel) => {
    return `${vehicleType}: ${vehicleModel}`;
};
console.log(vehicleDescription(Vehicle.CAR, 'Tesle'));
