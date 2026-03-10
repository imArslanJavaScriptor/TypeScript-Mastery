// functions
function add(a, b) {
    return a + b;
}
const subtract = (a, b) => {
    if (a < 0 || b < 0) {
        console.log("Parameter Value must be greater then 0");
    }
    return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
// In Explicit Return
const division = (a, b) => a / b;
console.log(add(20, 30));
console.log(subtract(50, 20));
console.log(multiply(2, 5));
console.log(division(10, 2));
// agr function kuch return na kre to hum void type use krte ha
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Arslan");
// Conditional parameter
function greetNameConditionaly(name) {
    console.log(`Hello ${name !== null && name !== void 0 ? name : "Guest"}`);
}
greetNameConditionaly();
// Default Parameter
function greetDefaultParameter(name = "Default Guest") {
    console.log(`Hello ${name !== null && name !== void 0 ? name : "Guest"}`);
}
greetDefaultParameter();
// Type: never
// never type tbhi use hota ha jb koi fucntion kuch bbhi return na trka ho & in do ma se koi case ho
// 1- function err throw kr rha ho
// 2- function ma infinite loop chal rhi ho.
//IMP: Never ka mtlab Function kabhi bhi finish nahi hota
function throwError(message) {
    throw new Error(message);
}
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return `${a} ${b}`;
    }
    else {
        throwError("Invalid Arguments");
    }
}
console.log(combine(20, 40));
console.log(combine("HM", "Arslan"));
export {};
