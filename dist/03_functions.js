// Functions in TypeScript
// Yaha add function ka pass 2 parameters ha a & b or duno ki type hoga number then parenthese ki bad mujhe btana hota ha ke fuinction jo return krega wo kis type ko belong krega so function string return kr rha ha to string.
// For Function Declaration
function add(a, b) {
    return `${a} + ${b} = ${a + b}`;
}
console.log(add(12, 90));
// For Function Expression
const add2 = function (a, b) {
    return a + b;
};
console.log(add2(20, 40));
// For Arrow Function
const add3 = (a, b) => {
    return a + b;
};
console.log(add3(60, 40));
// For Arrow Function Implicit Return
const add4 = (a, b) => a + b;
console.log(add4(20, 120));
// Agr function kuch retrun nhi krega to hum void type use krta ha.
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Arslan");
// Optional Parameter name?:string user na name pass kia tab bhi ok na hua tb bhi ok
function greet2(name) {
    // ?? Ye Check krega agr name hua to print krdega wrna "Guest" print kr dega.
    // ?? Ye Check krta ha Left side true hui to usa return kr deta ha wrna right side wali value return kr dega.
    console.log(`Hello ${name !== null && name !== void 0 ? name : "Guest"}`);
}
greet2();
// Default Parameter
function greet3(name = "Default Value Guest") {
    console.log(`Hello ${name}`);
}
greet3();
// Never Return Type
// Ye Tb Use Hoga Jab Function Kuch Bhi Return Nhi Krega.
// Usually 2 Hi cases ma kam ata ha
// 1- Jab Function Err Throw Kr Rha Ho.
// 2- Infinite Loop Chal Rhi ho Function Ma.
// Example 
function throwErr(message) {
    throw new Error(message);
}
// Ye Function upar wale code ki bagai bhi theek kam kr rha ha then what is the purpose of havg the above 2 lines 
// But agr kisi 1 line ko comment kro to err ata ha so expalin it. 
function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    else
        throwErr("Invalid Args");
}
console.log(combine(10, 20));
console.log(combine("Arslan", "King"));
function greet4(name) {
    return `Hello ${name !== null && name !== void 0 ? name : "Guest"}`;
}
console.log(greet4("Meer Hadi"));
export {};
