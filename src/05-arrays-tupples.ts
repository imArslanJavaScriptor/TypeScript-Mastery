// Arrays, Tuples
// const fruits: string[] = ["Apple", "Mango"]
// const numbers: number[] = [1,2,3,4]

// fruits.push(12) // arg of number is not allowed to set in parameter of string
// numbers.push("Grapes")  // arg of string is not allowed to set in parameter of number


// Type Inference
// const fruits = ["Apple", "Mango"]
// const numbers = [1,2,3,4]
// fruits.push(20) // To ye err dega becuaqse is na khud sa dekh lia ke array ma sirf string form values ha.
// Seedha Rule Yad rakho array bnate wqt ap jo datatype vales us ma add kr do un ke ilawa koi or vlaues ko add krne ki koshsih kro ga bad ma to err mile ga.
// const multiTypeArray = ["PineApple", 200]

// const strNumArray: (string | number)[] = ["Apple", "Mango", "Banana", "Oragne", 10, 20, 30, 40]
// strNumArray.push(50)
// strNumArray.push("Guava")
// console.log(strNumArray)


interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

const persons: Person[] = [
  {firstName: "HM", lastName: "Arslan", age: 23},
]

persons.push({firstName: "Mir", lastName: "Hadi", age: 20})
console.log(persons)

const readOnlyPersons: readonly Person[] = [{firstName: "HM", lastName: "Arslan", age: 20}]
console.log(readOnlyPersons)

// tuples
// array with fixed size and types
// Tuple ek array jaisa hota hai — but isme order aur type fixed hota hai.
const myCustomTuple: [string, string, number] = ["Str1", "Str2", 100]

// RGB Color
const color: [number, number, number] = [255, 0, 128]

// User info
const user: [string, number, boolean] = ["Arslan", 23, true]
//                                          name    age  isAdmin

// API response
const response: [boolean, string] = [true, "Data fetched!"]