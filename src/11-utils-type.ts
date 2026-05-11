// ------------------------------------------
// 1. Base Interfaces (Main Structure)
// ------------------------------------------

/**
 * Geo Interface
 * Iska kaam latitude aur longitude ko represent karna hai.
 * Mostly maps ya location systems me use hota hai.
 */
interface Geo {
  lat: string;
  lng: string;
}

/**
 * Address Interface
 * User ka complete address structure define kr raha hai.
 * Note:
 * "street" ki spelling actual code me galat thi (strret),
 * yahan correct kar di hai for better practice.
 */
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

/**
 * Company Interface
 * User kis company me kaam karta hai uski details.
 */
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

/**
 * User Interface
 * Ye hamara main blueprint hai.
 * Har user object ko isi structure ko follow karna hoga.
 */
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

// ------------------------------------------
// Real User Object
// ------------------------------------------

const user: User = {
  id: 1,
  name: "Graham Bell",
  username: "Bret",
  email: "sineo@may.com",

  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "98789-8789",

    geo: {
      lat: "-9.087",
      lng: "50.6575",
    },
  },

  phone: "1231000-23231",
  website: "soneo.org",

  company: {
    name: "RNK Private Limited",
    catchPhrase: "Trusted SDLC Providers",
    bs: "real-time collaborators",
  },
};

// =====================================================
// Utility Types
// =====================================================

// ==========================================
// 1. Partial<T>  --> "Optional Bana Do"
// ==========================================

/**
 * Partial<T>
 * Sare properties ko OPTIONAL bana deta hai.
 *
 * Real World Use Case:
 * Jab user profile update hoti hai,
 * to har field bhejna zaroori nahi hota.
 */

type PartialUser = Partial<User>;

const partialUser: PartialUser = {
  id: 120,
  name: "King",
  // baki sari properties optional hain ✅
};

/**
 * Agar Partial use na hota to:
 * address, email, phone etc sab dena parta.
 */

// ==========================================
// 2. Required<T> --> "Sab Kuch Zaroori"
// ==========================================

/**
 * Required<T>
 * Har property ko mandatory bana deta hai.
 *
 * Real World Use Case:
 * Jab complete verified data chahiye ho.
 */

type StrictUser = Required<User>;

const strictUser: StrictUser = {
  id: 1,
  name: "Graham Bell",
  username: "Bret",
  email: "sineo@may.com",

  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "98789-8789",

    geo: {
      lat: "-9.087",
      lng: "50.6575",
    },
  },

  phone: "1231000-23231",
  website: "soneo.org",

  company: {
    name: "RNK Private Limited",
    catchPhrase: "Trusted SDLC Providers",
    bs: "real-time collaborators",
  },
};

// ==========================================
// 3. Readonly<T> --> "Sirf Read Kar Sakte Ho"
// ==========================================

/**
 * Readonly<T>
 * Object ko immutable bana deta hai.
 * Yani create hone ke baad edit nahi kar sakte.
 *
 * Real World Use Case:
 * Configurations
 * Environment Variables
 * Constant Data
 */

type ReadOnlyUser = Readonly<User>;

const user3: ReadOnlyUser = {
  id: 1,
  name: "Graham Bell",
  username: "Bret",
  email: "sineo@may.com",

  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "98789-8789",

    geo: {
      lat: "-9.087",
      lng: "50.6575",
    },
  },

  phone: "1231000-23231",
  website: "soneo.org",

  company: {
    name: "RNK Private Limited",
    catchPhrase: "Trusted SDLC Providers",
    bs: "real-time collaborators",
  },
};

// ❌ Error
// user3.name = "Updated Name";

/**
 * Kyun error aya?
 *
 * Kyunki Readonly ne sari properties ko lock kar diya.
 */

// ==========================================
// 4. Pick<T, Keys> --> "Sirf Selected Fields"
// ==========================================

/**
 * Pick
 * Sirf wahi properties leta hai jo hum mention karein.
 *
 * Real World Use Case:
 * User Card
 * Profile Preview
 * Table Data
 */

type UserPreview = Pick<User, "email" | "name">;

const user4: UserPreview = {
  email: "king@king.com",
  name: "King",
};

// ==========================================
// 5. Omit<T, Keys> --> "Ye Fields Hata Do"
// ==========================================

/**
 * Omit
 * Specific properties ko remove kar deta hai.
 *
 * Real World Use Case:
 * Sensitive data hide karna
 * API response clean karna
 */

type UserWithoutAddress = Omit<User, "address" | "company">;

const user5: UserWithoutAddress = {
  id: 1,
  name: "John",
  username: "Bradpit",
  email: "brad@pit.com",
  phone: "12213-2323",
  website: "bradpit.com",
};

// address aur company allowed nahi hain ❌

// ==========================================
// 6. Record<K, T> --> "Dynamic Object Structure"
// ==========================================

/**
 * Record
 * Ek clean object structure create karta hai.
 *
 * Syntax:
 * Record<Key, ValueType>
 *
 * Real World Use Case:
 * Permissions
 * Role Systems
 * Feature Flags
 */

type UserRoles = "admin" | "editor" | "viewer";

type UserPermissions = Record<UserRoles, boolean>;

const permissions: UserPermissions = {
  admin: true,
  editor: false,
  viewer: true,
};

/**
 * Iska matlab:
 *
 * admin => boolean
 * editor => boolean
 * viewer => boolean
 */

// ==========================================
// 7. Exclude<T, U> --> "Kuch Remove Kar Do"
// ==========================================

/**
 * Exclude
 * Union type se specific values remove karta hai.
 */

type Roles = "admin" | "editor" | "guest";

type NonGuestRoles = Exclude<Roles, "guest">;

/**
 * Final Result:
 *
 * "admin" | "editor"
 *
 * guest remove ho gaya.
 */

// ==========================================
// 8. ReturnType<typeof fn>
// ==========================================

/**
 * ReturnType
 * Function jo return kar rahi hoti hai
 * uska type automatically nikal leta hai.
 *
 * Bohat useful hota hai APIs aur reusable functions me.
 */

function getUser() {
  return {
    id: 1,
    name: "King",
    age: 20,
  };
}

type UserReturn = ReturnType<typeof getUser>;

const newUser: UserReturn = {
  id: 2,
  name: "Arslan",
  age: 23,
};

// ==========================================
// Final Summary 🚀
// ==========================================

/**
 * Partial<T>
 * => Sab optional
 *
 * Required<T>
 * => Sab mandatory
 *
 * Readonly<T>
 * => Edit nahi kar sakte
 *
 * Pick<T, K>
 * => Sirf selected fields
 *
 * Omit<T, K>
 * => Kuch fields remove
 *
 * Record<K, T>
 * => Dynamic object structure
 *
 * Exclude<T, U>
 * => Union me se remove
 *
 * ReturnType<typeof fn>
 * => Function ka return type nikalta hai
 */