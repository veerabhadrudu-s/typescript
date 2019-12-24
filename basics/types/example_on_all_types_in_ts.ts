/* 
Define custom type in typescript using type keyword. Custom type decleration can be used along with objects defined using literal notation.In the below BankAccount custom type has function/method type decleration for deposite method. This function type decleration looks like arrow function but it is actually custom function type decleration. 
*/
type BankAccount = { money: number, deposite: (money: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposite(value: number): void {
        this.money += value;
    }
};
/* 
    Custom type defined in place along with literal notation of object.
*/

let myself: { name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Veera",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposite(3000);
console.log(`My balance in bank account is ${myself.bankAccount.money}`);

