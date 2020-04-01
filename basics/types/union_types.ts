let PERSON: string = "PERSON";
let VEHICLE: string = "VEHICLE";

class Person {
    type: string = PERSON;
    constructor(public payload: { name: string, age: number }) { }
}

class Vehicle {
    type: string = VEHICLE;
    constructor(public payload: { type: string, id: string }) { }
}


type UnionType = Person | Vehicle;

function printUnionType(unionTypeInstance: UnionType) {
    console.log(`Is unionTypeInstance is instance of Person ${unionTypeInstance instanceof Person}`);
    console.log(`Is unionTypeInstance is instance of vehicle ${unionTypeInstance instanceof Vehicle}`);
    console.log(`Payload value is `, unionTypeInstance.payload);
    switch (unionTypeInstance.type) {
        case PERSON:
            let personPayload: { name: string, age: number } = (unionTypeInstance.payload as { name: string, age: number });
            console.log(personPayload.age);
            break;
        case VEHICLE:
            let vehiclePayload: { type: string, id: string } = (unionTypeInstance.payload as { type: string, id: string });
            console.log(vehiclePayload.type);
            break;
        default:
            console.error("Invalid Type");
    }
}

let unionTypeInstance1: UnionType = new Person({ name: 'Veera', age: 32 });
let unionTypeInstance2: UnionType = new Vehicle({ type: 'Bike', id: 'KA53ER8044' });

printUnionType(unionTypeInstance1);
printUnionType(unionTypeInstance2);

