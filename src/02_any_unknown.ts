export {};

/**
 * ==========================================
 * 1. THE 'any' TYPE (The "Escape Hatch")
 * ==========================================
 * Using 'any' effectively turns off the type checker. 
 * It allows you to do anything, even things that will crash at runtime.
 */
let anyVariable: any;

anyVariable = "Hello";
anyVariable = 42.12345;
anyVariable = () => console.log("I am a function");

// ❌ DANGER: This compiles perfectly but might crash if anyVariable isn't a number.
// If anyVariable was a function at this point, this would throw a runtime error.
console.log(anyVariable.toFixed(3)); 

/**
 * ==========================================
 * 2. THE 'unknown' TYPE (The "Safe Any")
 * ==========================================
 * 'unknown' is the type-safe counterpart of 'any'. 
 * You can assign anything to it, but you CANNOT use it until 
 * you prove what type it is (Type Refining/Narrowing).
 */
let unknownVariable: unknown;

unknownVariable = 25;
unknownVariable = "I am a string now";

// ❌ Error: 'unknownVariable' is of type 'unknown'.
// console.log(unknownVariable.toFixed(2)); 

// ✅ Correct Way: Type Guarding (Narrowing)
if (typeof unknownVariable === "number") {
    // Inside this block, TS knows unknownVariable is definitely a number.
    console.log(unknownVariable.toFixed(2));
}

/**
 * ==========================================
 * 3. TYPE ASSERTION (The "Trust Me" approach)
 * ==========================================
 * If you are 100% sure of the type (e.g., from an API), 
 * you can use 'as' to cast it.
 */
let valueFromServer: unknown = "Professional TypeScript";
let stringLength: number = (valueFromServer as string).length; 

console.log(`Length is: ${stringLength}`);