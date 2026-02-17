// Functions in TypeScript
// Yaha add function ka pass 2 parameters ha a & b or duno ki type hoga number then parenthese ki bad mujhe btana hota ha ke fuinction jo return krega wo kis type ko belong krega so function string return kr rha ha to string.

// For Function Declaration
function add(a: number, b: number): string  {
    return `${a} + ${b} = ${a + b}`
}

console.log(add(12,90))

// For Function Expression
const add2 = function(a: number, b: number) : number {
    return a + b
} 
console.log(add2(20,40))

// For Arrow Function
const add3 = (a: number, b: number): number => {
    return a + b
}
console.log(add3(60,40))

// For Arrow Function Implicit Return
const add4 = (a: number, b: number) : number => a + b
console.log(add4(20, 120))

// Agr function kuch retrun nhi krega to hum void type use krta ha.
function greet(name: string): void {
    console.log(`Hello ${name}`)
} 

greet("Arslan")

// Optional Parameter name?:string user na name pass kia tab bhi ok na hua tb bhi ok
function greet2(name?:string) : void {
    // ?? Ye Check krega agr name hua to print krdega wrna "Guest" print kr dega.
    // ?? Ye Check krta ha Left side true hui to usa return kr deta ha wrna right side wali value return kr dega.
    console.log(`Hello ${name ?? "Guest"}`)
}
greet2()

// Default Parameter
function greet3(name: string = "Default Value Guest"): void {
    console.log(`Hello ${name}`)
}

greet3()


// Never Return Type
// Ye Tb Use Hoga Jab Function Kuch Bhi Return Nhi Krega.
// Usually 2 Hi cases ma kam ata ha
// 1- Jab Function Err Throw Kr Rha Ho.
// 2- Infinite Loop Chal Rhi ho Function Ma.


// Example 
function throwErr(message: string) : never {
    throw new Error(message)
}

// throwErr("Custom Err Message")


// Function Overloading in TypeScript
// Step 1 Define All Your Signature For The Functions.
// Here i Just deifne that my function can accept the number or string but function ki actual defination nhi likh mane.

function combine(a: number, b: number) : number
function combine(a: string, b: string) : string

// Ye Function upar wale code ki bagai bhi theek kam kr rha ha then what is the purpose of havg the above 2 lines 
// But agr kisi 1 line ko comment kro to err ata ha so expalin it. 
function combine(a: number| string, b: number | string): number | string {
    if(typeof a === "number" && typeof b === "number") {
        return a + b
    }  else if(typeof a === "string" && typeof b === "string") {
        return a + " " + b
    }
    else throwErr("Invalid Args")
}

console.log(combine(10, 20))
console.log(combine("Arslan", "King"))

// Function Overloading By Parameter Count
function greet4(): string;
function greet4(name: string) : string;
function greet4(name?:string):string {
    return `Hello ${name ?? "Guest"}`
}

console.log(greet4("Meer Hadi"))