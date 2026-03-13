// --- 01-Basics.ts ---

// 1. MODULE SCOPE FIX
// Adding an empty export ensures TypeScript treats this file as an isolated module.
// This prevents "Cannot redeclare block-scoped variable" errors when declaring 
// variables with the same names in other files.
export {};

// ==========================================
// 2. EXPLICIT TYPING (Type Annotations)
// ==========================================
// Explicitly defining the type ensures strict enforcement from the start.
let userName: string = "Arslan";
console.log(userName);

// Best Practice for Arrays: Define the type of elements inside the array.
let fruits: string[] = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits);

// ==========================================
// 3. TYPE INFERENCE
// ==========================================
// TypeScript is smart. If you assign a value immediately, it infers the type, 
// saving you from writing redundant code (e.g., let inferredName: string = "HM" is redundant).
let inferredName = "HM";      // TS infers type 'string'
let inferredAge = 20;         // TS infers type 'number'
let inferredIsAdult = true;   // TS infers type 'boolean'

// inferredName = 10; 
// ❌ Error: Type 'number' is not assignable to type 'string'.

// ==========================================
// 4. DECLARATION WITHOUT INITIALIZATION
// ==========================================
// If you declare a variable without a value, you MUST provide a type annotation.
// Otherwise, TS assigns it the `any` type, which defeats the purpose of TypeScript.
let firstName: string; // Fixed a minor typo from your original file ('firsName')
let age: number;
let isAdult: boolean;

// Initialization happens later...
firstName = "Hassan"; 
age = 25;

// ==========================================
// 5. UNION TYPES
// ==========================================
// Union types allow a variable to accept more than one type of data.
let userAge: string | number;
userAge = 20;   // ✅ Valid
userAge = "30"; // ✅ Valid

// ⚠️ Note on Best Practices:
// While `boolean | string` is valid, initializing a boolean-like variable 
// with a string ("true") is an anti-pattern unless you are specifically parsing 
// raw data (like from a URL query parameter or LocalStorage). 
// Keep booleans as strict booleans whenever possible.
let isMale: boolean | string = true; // Better to start with an actual boolean