enum Vehicle{
    CAR = "CAR",
    BIKE = "BIKE",
    TRUCK = "TRUCK"
}

type DescriptionCreator = (vehicleType: Vehicle, vehicleModel: string) => string

const vehicleDescription:DescriptionCreator = (vehicleType: Vehicle, vehicleModel: string): string => {
    return `${vehicleType}: ${vehicleModel}`
}

console.log(vehicleDescription(Vehicle.CAR, 'Tesle'));