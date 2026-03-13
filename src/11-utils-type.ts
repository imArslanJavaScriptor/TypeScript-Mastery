export {};

interface Geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  website: string;
  company: Company;
}

/**
 * ==========================================
 * 1. Partial<T> - "The Updater"
 * ==========================================
 * Makes EVERY property in an interface OPTIONAL.
 * Use case: Update profiles where you only change one or two fields.
 */
type UpdateUserRecord = Partial<User>;

const updateMyName: UpdateUserRecord = {
  name: "Arslan New Name" // ✅ Valid, even though id, email, etc. are missing.
};

/**
 * ==========================================
 * 2. Pick<T, Keys> - "The Specialist"
 * ==========================================
 * Creates a new type by picking only specific keys from an interface.
 * Use case: A user list where you only need the ID and Name.
 */
type UserBasicInfo = Pick<User, "id" | "name">;

const simpleUser: UserBasicInfo = {
  id: 1,
  name: "Arslan",
  // email: "test@test.com" // ❌ Error: 'email' does not exist in UserBasicInfo
};

/**
 * ==========================================
 * 3. Omit<T, Keys> - "The Excluder"
 * ==========================================
 * The opposite of Pick. It takes everything EXCEPT the keys you mention.
 * Use case: Sensitive data. Remove "id" before sending data to a form.
 */
type UserWithoutCompany = Omit<User, "company">;

const externalUser: UserWithoutCompany = {
  id: 1,
  name: "Hadi",
  email: "hadi@example.com",
  website: "hadi.dev"
  // company: { ... } // ❌ Error: 'company' was omitted!
};