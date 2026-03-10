// enums
// group of named constants
// typescript special feature
// not in javascript

// enum Direction {
//   UP,
//   DOWN,
//   LEFT,
//   RIGHT
// }

// function getUserDirection(direction: Direction): void {
//   if (direction === Direction.UP) {
//     console.log("user is going up");
//   } else if (direction === Direction.DOWN) {
//     console.log("user is going down");
//   } else if (direction === Direction.LEFT) {
//     console.log("user is going left");
//   } else if (direction === Direction.RIGHT) {
//     console.log("user is going right");
//   }
// }

// enum OrderStatus {
//   DELIVERED = 230, // By Default agr ap enums ki values ko chek kro to ye 0 se start hoti ha
//   CANCELLED,
//   RETURNED,
//   PENDING,
// }

// function generateMessageForUser(status: OrderStatus) : void {
//   if(status === OrderStatus.DELIVERED) {
//     console.log("Successfully Delivered")
//   }
// }
// console.log(Direction.UP) // 0 
// console.log(OrderStatus.CANCELLED) // 231

// Ab Enums by default values kuch index ki trha 0,1,2 ki form deta ha but ap string bhi set kr skte ho.

// enum DataSet {
//   NUMBER = "NUMBER",
//   STRING = "STRING",
//   BOOLEAN = "BOOLEAN",
//   ARRAY = "ARRAY"
// }

// console.log(DataSet.BOOLEAN) // BOOLEAN

// enums developer use km krte ha becuase ye bohot zuyada code add kr deta ha compiled javascript file ma.


// constant enums
const enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

console.log(Direction.UP)

// Notes
// Enums in TypeScript

// Q-1. Enum kya hota hai?
// Enum ek "named constants ka group" hota hai — jab aapke paas "limited fixed options" hoon.

// // Bina enum ke — confusing ❌
// const direction = "UP" // koi bhi string likh sakta hai, error prone

// // Enum ke saath — safe ✅
// enum Direction {
//   UP,
//   DOWN,
//   LEFT,
//   RIGHT
// }

// Point: Enum by default numbers assign karta hai

// enum Direction {
//   UP,    // 0
//   DOWN,  // 1
//   LEFT,  // 2
//   RIGHT  // 3
// }

// console.log(Direction.UP)    // 0
// console.log(Direction.DOWN)  // 1

// Point: Custom values bhi de sakte hain

// enum Direction {
//   UP = "UP",
//   DOWN = "DOWN",
//   LEFT = "LEFT",
//   RIGHT = "RIGHT"
// }

// console.log(Direction.UP) // "UP"

// Q-2. Kyun use karte hain? 💡

// "Problem bina enum ke:"
// // Koi bhi value de sakta hai — bug prone ❌
// function move(direction: string) { ... }

// move("up")     // ✅
// move("UP")     // ✅ (but inconsistent)
// move("oops")   // ✅ TypeScript kuch nahi bolega — BUG!

// "Enum ke saath:"
// // Sirf valid options allowed ✅
// function move(direction: Direction) { ... }

// move(Direction.UP)     // ✅
// move("oops")           // ❌ Error! — TypeScript pakad lega

// Q-3. What's Practical Use Cases 🔧?

// 1. Directions (jaise screenshot wala code
// enum Direction { UP, DOWN, LEFT, RIGHT }

// 2. User Roles
// enum UserRole {
//   ADMIN = "ADMIN",
//   EDITOR = "EDITOR",
//   VIEWER = "VIEWER"
// }

// function getAccess(role: UserRole) {
//   if (role === UserRole.ADMIN) {
//     console.log("Full access")
//   } else if (role === UserRole.VIEWER) {
//     console.log("Read only")
//   }
// }

// 3. Order Status (E-commerce)
// enum OrderStatus {
//   PENDING = "PENDING",
//   SHIPPED = "SHIPPED",
//   DELIVERED = "DELIVERED",
//   CANCELLED = "CANCELLED"
// }

//4. API Response Codes
// enum StatusCode {
//   SUCCESS = 200,
//   NOT_FOUND = 404,
//   SERVER_ERROR = 500
// }

// Q-4. Enum vs Const Enum — Kya Faraq hai?

// Normal Enum
// enum Direction {
//   UP = "UP",
//   DOWN = "DOWN"
// }

// Jab yeh "JavaScript mein compile" hota hai:
// // Pura object ban jata hai JS mein — extra code ❌
// var Direction;
// (function (Direction) {
//   Direction["UP"] = "UP";
//   Direction["DOWN"] = "DOWN";
// })(Direction || (Direction = {}));


// Q-5. What are Constant Enums?
// const enum Direction {
//   UP = "UP",
//   DOWN = "DOWN"
// }

// Jab yeh "JavaScript mein compile" hota hai:
// // Sirf value seedha replace ho jati hai — clean! ✅
// console.log("UP") // Direction.UP ki jagah seedha "UP" aa jata hai

// Point: Difference Table

// | | **Enum** | **Const Enum** |
// |---|---|---|
// | **JS Output** | Pura object banta hai | Sirf values inline replace hoti hain |
// | **Performance** | Thoda slow | Fast ✅ |
// | **Bundle Size** | Bara | Chota ✅ |
// | **Runtime access** | Ho sakta hai | Nahi ho sakta ❌ |
// | **Kab use karein** | Jab runtime pe object chahiye | Jab sirf compile-time pe kaam ho |


// # Simple Rule 💡

// > - Enum — jab aapko runtime pe bhi access karna ho (loop, Object.keys, etc.)
// > - Const Enum — jab sirf "type safety" chahiye aur "performance optimize" karni ho
