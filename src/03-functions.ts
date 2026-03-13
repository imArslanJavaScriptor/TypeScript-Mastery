export {};

/**
 * ==========================================
 * 1. BASIC FUNCTION TYPES
 * ==========================================
 * Always annotate parameters (a, b) and the return type (: number).
 */

// Function Declaration
function add(a: number, b: number): number {
  return a + b;
}

// Arrow Function with Logic
const subtract = (a: number, b: number): number => {
  if (a < 0 || b < 0) {
    console.warn("Parameter values should be greater than 0 for this logic.");
  }
  return a - b;
};

// Function Expression
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Arrow Function: Implicit Return (Concise)
const division = (a: number, b: number): number => a / b;

/**
 * ==========================================
 * 2. VOID VS. NEVER
 * ==========================================
 */

// VOID: Use when a function finishes its execution but returns no value.
function greet(name: string): void {
  console.log(`Hello ${name}`);
}

// NEVER: Use when a function NEVER finishes (throws error or infinite loop).
// It represents a value that will never occur.
function throwError(message: string): never {
  throw new Error(message);
}

/**
 * ==========================================
 * 3. PARAMETER VARIATIONS
 * ==========================================
 */

// Optional Parameter (?): 'name' can be string or undefined.
function greetOptional(name?: string): void {
  // Using Nullish Coalescing (??) to provide a fallback
  console.log(`Hello ${name ?? "Guest"}`);
}

// Default Parameter: If no value is passed, "Default Guest" is used.
// Note: TS infers the type from the default value, so :string is optional here.
function greetDefault(name: string = "Default Guest"): void {
  console.log(`Hello ${name}`);
}

/**
 * ==========================================
 * 4. FUNCTION OVERLOADING
 * ==========================================
 * This allows a function to be called in multiple ways with type safety.
 */

// Step 1: Define Overload Signatures (The "Rules")
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

// Step 2: Implementation (Must be compatible with all signatures)
function combine(a: any, b: any): any {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } 
  if (typeof a === "string" && typeof b === "string") {
    return `${a} ${b}`;
  }
  throwError("Invalid Arguments: Types must match (both numbers or both strings)");
}

console.log(combine(20, 40));       // Returns number: 60
console.log(combine("HM", "Arslan")); // Returns string: "HM Arslan"
// console.log(combine(20, "Arslan")); // ❌ Error: No overload matches this call.