export {};

/**
 * ==========================================
 * 1. ARRAYS & TYPE INFERENCE
 * ==========================================
 */
// Explicitly typed array
const fruits: string[] = ["Apple", "Mango"];

// Union Type Array: Allows a mix of types
const mixedArray: (string | number)[] = ["Pineapple", 200];
mixedArray.push(300);    // ✅ Valid
mixedArray.push("Guava"); // ✅ Valid

/**
 * ==========================================
 * 2. ARRAYS OF OBJECTS & READONLY
 * ==========================================
 */
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

// Array of objects following the Person interface
const persons: Person[] = [
  { firstName: "HM", lastName: "Arslan", age: 23 },
];

persons.push({ firstName: "Mir", lastName: "Hadi", age: 20 });

// readonly: Prevents any modification (push, pop, etc.) after initialization.
// Great for configuration or constant data.
const readOnlyPersons: readonly Person[] = [
  { firstName: "HM", lastName: "Arslan", age: 20 }
];
// readOnlyPersons.push({ ... }); // ❌ Error: Property 'push' does not exist on type 'readonly Person[]'.

/**
 * ==========================================
 * 3. TUPLES (Fixed Length & Order)
 * ==========================================
 * Tuples are strictly ordered. If the first element is a string, 
 * you cannot put a number there.
 */

// Common use case: RGB Colors
const color: [number, number, number] = [255, 0, 128];

// Common use case: User State (Similar to React's useState hook)
const userState: [string, number, boolean] = ["Arslan", 23, true];

// Common use case: HTTP Responses
const httpResponse: [number, string] = [200, "Success"];

/**
 * ⚠️ THE TUPLE "GOTCHA" (Pushing to Tuples)
 * Interestingly, TypeScript's basic Tuple does not stop .push() at runtime 
 * due to how JavaScript arrays work. To fix this, use 'readonly'.
 */
const strictTuple: readonly [string, number] = ["ID", 101];
// strictTuple.push(202); // ❌ Error: Property 'push' does not exist