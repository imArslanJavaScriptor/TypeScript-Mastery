// let myName: string = "im'Arslan"
// let myAge:  number = 20
// let isStudent: boolean = true
// myAge = "20" // Error Dega: Type 'string' is not assignable to type 'number'.
// Type Inference
let userName = "Arslan";
// userName = 10 Error dega Type 'number' is not assignable to type 'string'. 
// Type Inference Kam kaise krta ha?
// So jb ham koi variable initialize krte ha to typescript us variable ka type automatically infer /samajh jata ha ki iski value kya rkhi ha fior for exaqmple maine userName create kya or value pass ki in the from of string so now typescript knows ke iske andr string hi ai gi aur ab ma userName ko kisi aur type ki value assign nhi kr skta kyuki typescript ne uska type infer kr liya ha as string.
// Ab Ye Kuch examples ha jaha pr hum varialbes pulehe create krega or unki type define kr de ga but varailbes abhi initliaze nhi krega 
let myName;
// Concept: Union Types: agr ma multiple types pass krna cahhu like i can accept myAge as number or as a string both are fine to me so in that case ma union type ka use krunga to define myAge variable
let myAge;
let isStudent;
// And Then hum in variables ko initialize kr de ga
myName = "Arslan";
// So Now myAge can accept both number and string type of values
myAge = 20;
myAge = "20";
isStudent = true;
// Ap aesa bhi kr skte ha
let is18;
is18 = "true";
is18 = true;
console.log(myAge);
export {};
