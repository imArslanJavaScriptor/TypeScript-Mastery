// import { Person } from "./my-interfaces";

// IMP: type or interfaces ko ap seprate file ma bhi bna skte ho
// Now ab usecase ye ha ki mujhe interface Person ma koi or cheez add krni ha so wo kr slta hu by extending the interface
import { Person as BasePerson } from "./my-interfaces"; // For Extending Person Interface

// interface Person extends BasePerson {
//   heightInCM: string
// }

// interface ki trha hum type ko bhi extend kr skte ha.
// Intresting Detail to notice mane a bhi type ko extent kia by assigning interface in type.
// So Yes ye bhi Possible ha we can use interface in types in thsi way.
type Person = BasePerson & {
  heightInCM: string;
};

const person: Person = {
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
