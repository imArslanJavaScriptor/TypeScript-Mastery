// Type Casting/Assertion.
console.log(addOrContact(2,5, "add"))
console.log(addOrContact(2,5, "concat"))

function addOrContact(num1: number, num2: number, method: "add" | "concat"): string | number {
  if(method === "add") {
    return num1 + num2
  }
  return "" +  num1 + num2
}


// Without TypeCasting:
// Ye err dega ke value to string or number kuch bhi ho skti ha to ap kaise string use kr rhe ho only.
// const value: string = addOrContact(10, 20, "concat")
// console.log(value)


// With TypeCasting
// Now agr ma sure hu ka mujhe string hi milni ha ya number hi milna ha so ma typecasting ka use ke specify kr du ga.
const value: number = addOrContact(10, 20, "add") as number
console.log(value)


// More Examples
const value2: number = addOrContact(10, 20, "add") as number
const value3: string = <string> addOrContact(10, 20, "concat") // This is Syntax kam same hi kr rha ha ye
console.log(value2)
console.log(value3)

// DOM
// Select Inputs
const nameInput = document.getElementById("name") as HTMLInputElement
const ageInput = document.getElementById("age") as HTMLInputElement
const output = document.getElementById("output") as HTMLElement
// const form = document.getElementById("user-form")! // agr last ma exclamation sign lga dya to iska mtlab ye from null nhi hoga.
const form = document.getElementById("user-form") as HTMLFormElement


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const nameValue = nameInput.value
  const ageValue = ageInput.value
  console.log(nameValue, ageValue)
  let resultPara = document.createElement("span")
  resultPara.textContent = ` User Name is: ${nameValue} and he/her age is: ${ageValue}`
  output.appendChild(resultPara)
})