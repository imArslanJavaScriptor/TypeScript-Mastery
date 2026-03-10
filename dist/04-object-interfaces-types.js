// import { Person } from "./my-interfaces";
const person = {
    firstName: "Arslan",
    lastName: "King",
    age: 22,
    // address: "Lahore Punjab Pakistan"
    address: {
        city: "Lahore",
        state: "Punjab",
        country: "Pakistan",
        zipCode: 54000,
    },
    heightInCM: "180 CM",
};
console.log(person);
export {};
// Diffrence B/W type & interface
// 1- type ko assign = kia jata ha and interface difrectly start hota ha.
// 2- interface are usable with objects only and type ko ap arrays, function, objects kisi ke liye bhi use kro.
// 3- interface ko 1 sa zyada mrtaba bhi create kr skta hu but type ko nhi dublicate identifier ka err dega.
// type Person = {
//   firstName: string,
//   lastName: string,
//   age?: number
// }
// type Person = {
//   address?: string,
//   profession?: string,
//   passion?: number
// }
// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }
// interface Person {
//   address?: {
//     country: string;
//     zipCode: number;
//     city: string;
//     state: string;
//   };
//   profession?: string;
//   passion?: number;
// }
// const person: Person = {
//   firstName: "Arslan",
//   lastName: "King",
//   age: 22,
//   // address: "Lahore Punjab Pakistan"
//   address: {
//     city: "Lahore",
//     state: "Punjab",
//     country: "Pakistan",
//     zipCode: 54000,
//   },
// };
// console.log(person);
