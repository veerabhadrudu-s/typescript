// Number type.
let count: number = 1;
// boolean type.
let isDone: boolean = true;
// string type.
let myName: string = "Veerabhadrudu";

console.log(`Present count is ${count}`);
console.log(`Is Done ${isDone}`);
console.log(`My Name is ${myName}`);
//any type
let anyTypeValue: any = "50";
anyTypeValue = 456;
anyTypeValue = true;

//array types.
let hobbies: string[] = ["Cooking", "Sports"];
let scores: number[] = [67, 126, 232, 34, 23, 56, 78, 124];

//tuple type. Allows us to create an arry with specific types in the indexes.
let address: [string, string, string, number] = ["Address Line 1", "Address Line 2", "Place", 560048];
for (const addressField of address)
    console.log(`Address Field -> ${addressField}`);

//enum type. Allows us to create constants.
enum DAYS { SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY };
enum COLOUR { BLUE = 5, RED = 78, YELLOW = 9, WHITE, PINK, BLACK };

console.log(`BLUE Value is ${COLOUR.BLUE}`);
console.log(`RED Value is ${COLOUR.RED}`);
console.log(`YELLOW Value is ${COLOUR.YELLOW}`);
console.log(`PINK Value is ${COLOUR.PINK}`);
console.log(`BLACK Value is ${COLOUR.BLACK}`);
