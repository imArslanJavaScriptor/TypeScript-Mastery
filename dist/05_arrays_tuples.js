// Arrays & Tuples in TypeScript
// const fruits: string[] = ["Apple", "Mango"];
// const number: number[] = [1, 2, 3, 4, 5, 6];
// fruits.push(20) // Ye Erro dega becuase fruits wale Array ma sirf string hi pass ho skti ha
// Type Inference
const fruits = ["apple", "mango"];
// fruits.push(20) Same Here but here i don't specify ke mujhe string hi accept krni ha so yaha pr Inference hua Automaticaly mujhe speicfy krna nhi pra. 
const numbers = [1, 2, 3, 4, 5];
// numbers.push("Apple") //Err dega number hi pass kro is ma.
// const myArray: (string | number | boolean)[] = [1,2,3,4,5, "Apple", "Mango", true]
// Same will Happen Via Inferening
// Same Inference Concept jb apne array define kia or diffrent data types ki form ma values fill ki so now all of the provided data typeas are allowed to be in the array later whenever you wany but outside of it will create problem like if i try to add object latter it will throw err BCZ 
const myArray = [1, 2, 3, 4, 5, "Apple", "Mango", true];
myArray.push("Grapes");
const persons = [{ personName: "Arslan King", personAge: 20 }];
// If you want to make your array read only and restrict it so that nothing can be add to it pass readonly to it.
const readOnlyPerson = [{ personName: "Meer Hadi", personAge: 25 }];
// readOnlyPerson.push() // Property 'push' does not exist on type 'readonly Person[]'.
// Tuples
// Tuples are nothing but array with fixed size and types. Look at the Example Below
// Method 1: Yaha Mane Defination ke time pr hi type pass krdi string, number, boolean
const myCustomTuple = ['King', 10, true];
const myCustomTuple2 = ['King', 100, true];
export {};
// Yehi ha Tuple jis ma apne fixe krdia ka apko kitni properties chaioye or kis types ko belong krne wali chaiye.
