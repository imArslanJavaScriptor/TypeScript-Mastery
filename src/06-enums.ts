export {};

/**
 * ==========================================
 * 1. NUMERIC ENUMS (Default Behavior)
 * ==========================================
 */
enum OrderStatus {
  Pending,   // 0
  Shipped,   // 1
  Delivered, // 2
  Cancelled  // 3
}

// You can also start from a specific number
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

/**
 * ==========================================
 * 2. STRING ENUMS (More Readable in Logs)
 * ==========================================
 */
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

function checkAccess(role: UserRole): void {
  if (role === UserRole.Admin) {
    console.log("Full Access Granted");
  }
}

/**
 * ==========================================
 * 3. CONST ENUMS (Performance Optimized)
 * ==========================================
 * 'const enum' does not create an object in JavaScript. 
 * It replaces the name with the value directly during compilation.
 */
const enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

let move = Direction.Up; 
// In compiled JS, this becomes: let move = "UP"; (No object lookup!)

/**
 * ==========================================
 * 4. THE MODERN ALTERNATIVE: UNION TYPES
 * ==========================================
 * Many Senior Devs prefer String Literal Unions over Enums because 
 * they are 100% zero-cost in JavaScript.
 */
type ModernDirection = "UP" | "DOWN" | "LEFT" | "RIGHT";

let playerDir: ModernDirection = "UP"; // ✅ Simple, safe, and lightweight