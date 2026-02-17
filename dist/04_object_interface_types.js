const person = {
    firstName: "HM",
    lastName: "Arslan",
    // age: "23" // Err manae already type define krdi ha age ko number hi assign hoga
    age: 20,
};
// person.age = "23" // Ye Error Dega TypeScript na Infer krlia ka is ki type number hi hogi.
// Method 2: Dono 1 sath bhi ho sakte ha like that
const person2 = {
    firstName: "Meer",
    lastName: "Hadi",
    age: 25,
};
const user = {
    firstName: "Hafiz",
    lastName: "Muhammad Arslan",
    age: 23,
};
const testOBJ = {
    heightInCM: 185,
    userAge: 24,
    userLoacation: "Lahore",
    userName: "King",
    userDesignation: "Leader"
};
console.log(testOBJ);
const newUser = {
    userName: "HM-Arslan",
    userAge: 20,
    userLoacation: "Lahore Punjab Pakistan",
    userDesignation: "Software Enginner",
    heightInCM: 180
};
const newPersonInfo = {
    userAge: 20,
    userName: "im'Arslan King",
    userAddress: {
        city: "Lahore",
        zipcode: 552290,
        houseNumber: "121AA56",
        country: "Pakistan",
        state: "Punjab"
    }
};
console.log(newPersonInfo);
// Interfaces & Types ko ap alg file ma bna kr bhi sue kr skte ho
console.log("New User:", newUser);
export {};
