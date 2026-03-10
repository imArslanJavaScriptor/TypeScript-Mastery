// const myName = "HM-Arslan"
// console.log(myName)

// let arr = ["Apple", "Mango", "Banana", "Orange"]
// console.log(arr)

// function sayGood() {
//   console.log("Im Good")
// }
// sayGood()

// Do files ma same variables hone sa error ata ha if ap kuch export nhi kr te agr ap kuch export nhi krte kis file ma sa to typescript us file ko script ki trha treet krega na ki module ki trha / new file ki trha or sari scripts global scope ka part hoti ha and we know that we can't re dceclare the variables with the same data again in let & const scenario.

// Solutions
// 1- apne functions and veriables ko export krdo
// 2- empty export {} sa bhi err chala jata ha.
// 3- configre file ma change kro. using ➡️ "moduleDetection": "force"


let userName: string = "Arslan"
console.log(userName)

// type inference:
// let firstName = "HM"
// let age = 20
// let is18 = true
// firstName = 10 // Not Assignlable to type String
// jis type sa ap vaiable ko initliza kro uski ki type ko default set krdega.


// Variables ko pehle types ke sath initiliza krdena use bd ma krna.
let firsName: string // firsName sirf string type ka hona chahia.
let age: number 
let is18: boolean


// union type
let userAge: string | number
let isMale: boolean | string = "true"

userAge = 20
userAge = "30"
// ab ma userAge ma string or number is ma sa koi bhi value set kr skta hu BCZ of union type.
