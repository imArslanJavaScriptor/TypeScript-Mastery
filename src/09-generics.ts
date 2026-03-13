export {};

/**
 * ==========================================
 * 1. THE IDENTITY FUNCTION (The "Hello World" of Generics)
 * ==========================================
 * Instead of 'any', we use a Type Variable <T>.
 */
function identity<T>(data: T): T {
  return data;
}

// Usage with Type Inference (TS figures out T for you)
const numVal = identity(100);       // T is inferred as number
const strVal = identity("Gemini");  // T is inferred as string

/**
 * ==========================================
 * 2. MULTIPLE GENERICS (Pairs and Tuples)
 * ==========================================
 */
function pair<T, U>(key: T, val: U): [T, U] {
  return [key, val];
}

const userSession = pair("token", 12345); // Returns [string, number]

/**
 * ==========================================
 * 3. GENERIC CONSTRAINTS (The 'extends' Keyword)
 * ==========================================
 * Sometimes <T> is TOO flexible. We can limit it using 'extends'.
 */
interface HasLength {
  length: number;
}

// We are telling TS: "T can be anything, AS LONG AS it has a .length property"
function getLength<T extends HasLength>(arg: T): number {
  return arg.length;
}

console.log(getLength("Hello"));    // ✅ String has .length
console.log(getLength([1, 2, 3]));  // ✅ Array has .length
// console.log(getLength(42));      // ❌ Error: number doesn't have .length

/**
 * ==========================================
 * 4. PRACTICAL USE CASE: API WRAPPER
 * ==========================================
 */
interface ApiResponse<Data> {
  status: number;
  message: string;
  payload: Data; // The payload structure depends on the API call
}

interface User {
  id: number;
  username: string;
}

const userResponse: ApiResponse<User> = {
  status: 200,
  message: "Success",
  payload: { id: 1, username: "arslan_king" }
};