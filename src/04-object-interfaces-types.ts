// 1. MODULE IMPORTS
// In a real project, interfaces are often kept in a separate 'types' or 'interfaces' folder.
// For this example, let's assume BasePerson is imported.
import { Person as BasePerson } from "./my-interfaces";

/**
 * ==========================================
 * 2. EXTENDING TYPES & INTERFACES
 * ==========================================
 */

// OPTION A: Extending an Interface (Inheritance style)
// interface Person extends BasePerson {
//   heightInCM: string;
// }

// OPTION B: Using Type Intersection (&)
// You can mix and match! You can intersect a Type with an Interface.
type Person = BasePerson & {
  heightInCM: string;
  isAthlete: boolean; // Added for variety
};

const person: Person = {
  firstName: "Arslan",
  lastName: "King",
  age: 22,
  address: {
    city: "Lahore",
    state: "Punjab",
    country: "Pakistan",
    zipCode: 54000,
  },
  heightInCM: "180 CM",
  isAthlete: true,
};

console.log("Refined Person Object:", person);

/**
 * ==========================================
 * 3. DECLARATION MERGING (Interface Only)
 * ==========================================
 */

// Interfaces with the same name in the same scope automatically MERGE.
// This is NOT possible with 'type'.
interface User {
  id: number;
}

interface User {
  username: string;
}

// 'finalUser' now requires BOTH id and username.
const finalUser: User = {
  id: 1,
  username: "arslan_pro"
};

/**
 * ==========================================
 * 4. TYPE ALIASES (Versatility)
 * ==========================================
 * Types can do things Interfaces cannot, like Unions or Aliasing primitives.
 */
type ID = string | number; // Union Type
type Role = "admin" | "user" | "guest"; // Literal Union Type