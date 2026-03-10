// Arrays, Tuples
// const fruits: string[] = ["Apple", "Mango"]
// const numbers: number[] = [1,2,3,4]
const persons = [
    { firstName: "HM", lastName: "Arslan", age: 23 },
];
persons.push({ firstName: "Mir", lastName: "Hadi", age: 20 });
console.log(persons);
const readOnlyPersons = [{ firstName: "HM", lastName: "Arslan", age: 20 }];
console.log(readOnlyPersons);
// tuples
// array with fixed size and types
// Tuple ek array jaisa hota hai — but isme order aur type fixed hota hai.
const myCustomTuple = ["Str1", "Str2", 100];
// RGB Color
const color = [255, 0, 128];
// User info
const user = ["Arslan", 23, true];
//                                          name    age  isAdmin
// API response
const response = [true, "Data fetched!"];
export {};
