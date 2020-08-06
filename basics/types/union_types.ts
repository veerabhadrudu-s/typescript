let BOAT: string = "BOAT";
let VEHICLE: string = "VEHICLE";

class Boat {
    type: string = BOAT;
    constructor(public payload: { name: string, locationId: number }) { }
}

class Vehicle {
    type: string = VEHICLE;
    constructor(public payload: { type: string, id: string }) { }
}


type UnionType = Boat | Vehicle;

function printUnionType(unionTypeInstance: UnionType) {
    console.log(`Is unionTypeInstance is instance of Boat ${unionTypeInstance instanceof Boat}`);
    console.log(`Is unionTypeInstance is instance of Vehicle ${unionTypeInstance instanceof Vehicle}`);
    console.log(`Payload value is `, unionTypeInstance.payload);
    switch (unionTypeInstance.type) {
        case BOAT:
            let boatPayload: { name: string, locationId: number } = (unionTypeInstance.payload as { name: string, locationId: number });
            console.log(boatPayload.locationId);
            break;
        case VEHICLE:
            let vehiclePayload: { type: string, id: string } = (unionTypeInstance.payload as { type: string, id: string });
            console.log(vehiclePayload.type);
            break;
        default:
            console.error("Invalid Type");
    }
}

let unionTypeInstance1: UnionType = new Boat({ name: 'Veera', locationId: 32 });
let unionTypeInstance2: UnionType = new Vehicle({ type: 'Bike', id: 'KA53ER8044' });

printUnionType(unionTypeInstance1);
printUnionType(unionTypeInstance2);

