// ==========================================
// TypeScript keyof & typeof Complete Guide
// Roman Urdu Explanation Version 🚀
// ==========================================

// ==========================================
// 1. Basic User Interface
// ==========================================

/**
 * Interface ek blueprint hota hai.
 * Ye define karta hai ke object me konsi properties hongi
 * aur unki types kya hongi.
 */

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// ==========================================
// Real Object
// ==========================================

const user: User = {
  id: 1,
  name: "Graham Bell",
  username: "Bret",
  email: "sineo@may.com",
  phone: "1231000-23231",
  website: "soneo.org",
};

// ======================================================
// keyof Keyword
// ======================================================

/**
 * keyof
 * Interface ya object type ki sari keys ka UNION bana deta hai.
 *
 * Example:
 *
 * "id" | "name" | "username" | "email" | "phone" | "website"
 */

type UserKeys = keyof User;

/**
 * Final Result:
 *
 * type UserKeys =
 *  | "id"
 *  | "name"
 *  | "username"
 *  | "email"
 *  | "phone"
 *  | "website"
 */

// ======================================================
// Problem Without keyof
// ======================================================

/**
 * for...in loop me TypeScript ko exact key ka pata nahi hota.
 *
 * TypeScript key ko simply "string" samajhta hai.
 */

for (let key in user) {
  // ❌ Problem:
  // TypeScript kahega:
  // "Element implicitly has an 'any' type"

  // console.log(user[key])

  /**
   * Solution:
   * key ko explicitly batana parega
   * ke ye User ki valid keys me se ek hai.
   */

  console.log(`${key} : ${user[key as UserKeys]}`);
}

/**
 * key as UserKeys
 *
 * Iska matlab:
 * "Trust me TypeScript,
 * ye key User interface ki valid key hai."
 */

// ======================================================
// typeof Keyword
// ======================================================

/**
 * typeof
 * Kisi variable/object ka type nikalta hai.
 *
 * Bohat useful hota hai jab interface available na ho.
 */

const user2 = {
  id: 1,
  name: "Graham Bell",
  username: "Bret",
  email: "sineo@may.com",
  phone: "1231000-23231",
  website: "soneo.org",
};

// ==========================================
// typeof se Type Generate Karna
// ==========================================

type UserType = typeof user2;

/**
 * Ye automatically ye type bana dega:
 *
 * {
 *   id: number;
 *   name: string;
 *   username: string;
 *   email: string;
 *   phone: string;
 *   website: string;
 * }
 */

// ==========================================
// keyof + typeof Together
// ==========================================

for (let key in user2) {
  console.log(`${key} : ${user2[key as keyof UserType]}`);
}

/**
 * Yahan kya ho raha hai?
 *
 * keyof UserType
 *
 * => user2 ki sari keys ka union ban raha hai.
 *
 * Result:
 * "id" | "name" | "username" | ...
 */

// ======================================================
// Direct typeof Without Separate Type
// ======================================================

/**
 * Kabhi kabhi alag type banane ki bhi zaroorat nahi hoti.
 * Hum direct typeof use kar sakte hain.
 */

const user3 = {
  id: 1,
  name: "Graham Bell",
  username: "Bret",
  email: "sineo@may.com",
  phone: "1231000-23231",
  website: "soneo.org",
};

for (let key in user3) {
  console.log(`${key} : ${user3[key as keyof typeof user3]}`);
}

/**
 * Breakdown:
 *
 * typeof user3
 * => user3 ka complete type nikal raha hai
 *
 * keyof typeof user3
 * => us type ki sari keys ka union ban raha hai
 */

// ======================================================
// Real World Understanding
// ======================================================

/**
 * keyof Kab Use Hota Hai?
 *
 * ✅ Dynamic Object Access
 * ✅ Generic Functions
 * ✅ Type Safe Loops
 * ✅ Reusable Utilities
 */

/**
 * typeof Kab Use Hota Hai?
 *
 * ✅ Existing object se type banana
 * ✅ Duplicate interfaces avoid karna
 * ✅ Auto type inference
 */

// ======================================================
// Most Powerful Combination 🚀
// ======================================================

/**
 * keyof + typeof
 *
 * Ye TypeScript me bohat powerful combo hai.
 *
 * Isse:
 *
 * ✅ Dynamic access milta hai
 * ✅ Type safety milti hai
 * ✅ IntelliSense better hoti hai
 * ✅ Errors kam hote hain
 */

// ======================================================
// Bonus Example
// ======================================================

const person = {
  name: "Arslan",
  age: 23,
  country: "Pakistan",
};

type PersonKeys = keyof typeof person;

/**
 * Final Result:
 *
 * type PersonKeys =
 *  | "name"
 *  | "age"
 *  | "country"
 */

let keyName: PersonKeys;

keyName = "name"; // ✅ Valid
keyName = "age"; // ✅ Valid

// keyName = "email" ❌ Error
// because "email" does not exist

// ======================================================
// Final Summary 🚀
// ======================================================

/**
 * keyof
 * => Object/interface ki keys ka union banata hai
 *
 * typeof
 * => Variable/object ka type nikalta hai
 *
 * keyof typeof
 * => Object ki keys dynamically nikalta hai
 *
 * Most Common Use:
 *
 * object[key as keyof typeof object]
 *
 * Isse TypeScript ko exact keys ka pata chal jata hai.
 */