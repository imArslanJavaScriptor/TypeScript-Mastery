export {};

/**
 * ==========================================
 * 1. TYPE ASSERTION WITH FUNCTIONS
 * ==========================================
 */
function addOrConcat(num1: number, num2: number, method: "add" | "concat"): string | number {
  if (method === "add") {
    return num1 + num2;
  }
  return "" + num1 + num2;
}

// Using 'as' keyword (Recommended)
const resultAsNumber = addOrConcat(10, 20, "add") as number;

// Using Angle-Bracket syntax (Note: Cannot be used in .tsx files/React)
const resultAsString = <string>addOrConcat(10, 20, "concat");

console.log(typeof resultAsNumber); // number
console.log(typeof resultAsString); // string

/**
 * ==========================================
 * 2. DOM MANIPULATION & TYPE CASTING
 * ==========================================
 */

// We cast to specific types to access properties like '.value' or '.submit()'
const nameInput = document.getElementById("name") as HTMLInputElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const output = document.getElementById("output") as HTMLElement;

/**
 * The Non-Null Assertion Operator (!)
 * Using '!' tells TS that this element DEFINITELY exists in the DOM.
 * Use this only if you are 100% sure the element is in your HTML.
 */
const form = document.getElementById("user-form")!; 

// If we cast it as a Form element, we get autocomplete for form events
const contactForm = document.getElementById("contact-form") as HTMLFormElement;

if (contactForm) {
  contactForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const nameValue = nameInput.value; // Accessible because of 'as HTMLInputElement'
    const ageValue = ageInput.value;

    const resultPara = document.createElement("span");
    resultPara.textContent = `User: ${nameValue}, Age: ${ageValue}`;
    
    output.appendChild(resultPara);
  });
}