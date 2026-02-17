import { NewUser as BaseUser } from "./my_interfaces";

// Objects Interfaces & Types

// Types

// Method 1: Seprate Define kia Object ko and uski relevant type ko
type Person = {
  firstName: string;
  lastName: string;
  age?: number;
};

const person: Person = {
  firstName: "HM",
  lastName: "Arslan",
  // age: "23" // Err manae already type define krdi ha age ko number hi assign hoga
  age: 20,
};

// person.age = "23" // Ye Error Dega TypeScript na Infer krlia ka is ki type number hi hogi.

// Method 2: Dono 1 sath bhi ho sakte ha like that

const person2: {
  firstName: string;
  lastName: string;
  age: number;
} = {
  firstName: "Meer",
  lastName: "Hadi",
  age: 25,
};

// But i will Prefer Method 1 Which is more convinieant and Vorbose

// Interfaces
interface User {
  firstName: string;
  lastName: string;
  age?: number;
}

const user: User = {
  firstName: "Hafiz",
  lastName: "Muhammad Arslan",
  age: 23,
};

// Diffrences B/W Types & Interfaces
// Use Interfaces: always for Objects
// Use Types: for Arrays, Objects, Primitve Type & Tuples

// Convention: Hum Capital Letters use krta ha for Interfaces & Types Names.

// Hum Interface ke andr type bhi use kr skte ho 
// Hum Types ke andr Interface bhi use kr skta hain.

// Hum Interfaces ko extends bhi kr skta ha Like this 

// Exanding Interface Example
interface NewUser extends BaseUser  {
    heightInCM: number
}

// Extending Type Example:
type PersonType = BaseUser & {
    heightInCM: number
}


const testOBJ: PersonType = {
    heightInCM: 185,
    userAge: 24,
    userLoacation: "Lahore",
    userName: "King",
    userDesignation: "Leader"
}

console.log(testOBJ)


const newUser: NewUser = {
  userName: "HM-Arslan",
  userAge: 20,
  userLoacation: "Lahore Punjab Pakistan",
  userDesignation: "Software Enginner",
  heightInCM: 180
};

// But Aesa Types ka case ma nhi kr skta Error ai ga.

// type NewUserType = {
//     userName: string,
//     userAge: number,
// }

// // So This will Throw Error
// type NewUserType = {
//     userName: string,
//     userAge: number,
// }

// Hum Object bhi pass kr skte ha or us ke andr ane wali properties ki type define kr stke ha In Both Interface & Type,
interface AboutUser {
    userName: string,
    userAge: number,
    userAddress?: {
        country: string,
        zipcode: number,
        houseNumber: string,
        city: string,
        state: string
    }
}

type AboutUserType = {
    userName: string,
    userAge: number,
    userAddress?: {
        country: string,
        zipcode: number,
        houseNumber: string,
        city: string,
        state: string
    }
}

const newPersonInfo: AboutUserType = {
    userAge: 20,
    userName: "im'Arslan King",
    userAddress: {
        city: "Lahore",
        zipcode: 552290,
        houseNumber: "121AA56",
        country: "Pakistan",
        state: "Punjab"
    }
}


console.log(newPersonInfo)

// Interfaces & Types ko ap alg file ma bna kr bhi sue kr skte ho
console.log("New User:", newUser)