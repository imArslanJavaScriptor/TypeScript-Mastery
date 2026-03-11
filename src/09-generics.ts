// // // // generics in typescript
// // // let res = identity(10)
// // // console.log(res)
// // // function identity(datatype:any)   {
// // //   return datatype
// // // }

// // // const val = identity("Hello World")
// // // console.log(val.toLowerCase())

// // // identity function with generics
// // // ab ye generic ha  <CustomType> (data: CustomType) 
// // // ab lazmi nhi ha ke ap CustomType hi likho kuch bhi likh skte ho 
// // // Convention ye ha: <T> (data: T)
// // function identity<CustomType> (data: CustomType) {
// //   return data
// // }

// // // Ab jb function call kr rhe ho to koi bhi type dedo but phir usi type ki value honi chahiye.
// // const val1 = identity<string>("Hello World")
// // const val2 = identity<number>(200)
// // const val3 = identity<boolean>(true)
// // const val4 = identity<string[]>(["Apple", "Mango", "Banana", "Orange"])

// // console.log(val1.toUpperCase())
// // console.log(val2.toFixed(2))
// // val4.map(item => console.log(item))

// is Pair function ko search kro kaise kam kr rha ha?
// pair("hello", 100) -> ["hello", 100]
function pair<T, U> (key: T, val: U): [T, U] {
  return [key, val]
}


// // 1. Generics Kya Hota Hai?
// // ❌ Problem — ANY use karne se type safety khatam ho jati hai
// function identity(datatype: any) {
//   return datatype  // TypeScript ko nahi pata return type kya hai
// }

// const val = identity("Hello World")
// val.toLowerCase()     // ✅ Kaam karta hai — but TypeScript ne warn nahi kiya
// val.toFixed(2)        // ✅ Bhi kaam karta hai?? — GALAT! String pe toFixed nahi hota!
// // TypeScript chup raha — kyunki 'any' ne sab allow kar diya 😓

// // ✅ Solution — Generics use karo!
// function identityS<T>(datatype: T): T {
//   return datatype   // T matlab: "jo type andar aaye, wahi bahar jaaye"
// }

// const vals = identityS<string>("Hello World")
// vals.toLowerCase()   // ✅ TypeScript jaanta hai ye string hai
// // vals.toFixed(2)      // ❌ ERROR — TypeScript pakad leta hai! Ye string hai, number nahi
// // Simple Definition: <T> ek placeholder hai type ke liye — function call
// // hone pe real type se replace ho jata hai.

// // 2. Kyun Use Hote Hain? (3 Solid Reasons)
// // REASON 1 — Reusability: Ek function, har type ke liye kaam kare
// function identity<T>(data: T): T { return data }

// identity<number>(42)          // T = number
// identity<string>("Salam")     // T = string
// identity<boolean>(true)       // T = boolean
// // Bina generics ke 3 alag functions likhne padte! 😩

// // REASON 2 — Type Safety: TypeScript sab track karta hai
// function firstItem<T>(arr: T[]): T {
//   return arr[0]
// }

// const num = firstItem<number>([1, 2, 3])
// num.toFixed(2)      // ✅ TypeScript jaanta hai — ye number hai

// const str = firstItem<string>(["Ali", "Sara"])
// str.toUpperCase()   // ✅ TypeScript jaanta hai — ye string hai
// str.toFixed(2)      // ❌ ERROR — TypeScript pakad leta hai!

// // REASON 3 — any se bachao: any type safety tod deta hai, Generics nahi
// function badFunc(data: any): any { return data }   // 😓 Type info lost
// function goodFunc<T>(data: T): T { return data }   // 😊 Type info safe



// // 3. Kab Use Karna Chahiye?
// // ✅ USE KARO — Jab same logic multiple types pe kaam kare
// function wrapInArray<T>(value: T): T[] {
//   return [value]
// }
// wrapInArray<number>(5)        // [5]
// wrapInArray<string>("Hello")  // ["Hello"]


// // ✅ USE KARO — Jab function input/output same type ho
// function getLastItem<T>(arr: T[]): T {
//   return arr[arr.length - 1]
// }


// // ✅ USE KARO — Jab API response ka type flexible ho
// async function fetchData<T>(url: string): Promise<T> {
//   const res = await fetch(url)
//   return res.json()
// }

// interface User { name: string; age: number }
// const user = await fetchData<User>("/api/user")
// user.name   // ✅ TypeScript jaanta hai — User type hai


// // ❌ MAT KARO — Jab type hamesha fixed ho
// function addNumbers(a: number, b: number): number {
//   return a + b    // Yahan generic ki zaroorat nahi — type kabhi nahi badlega
// }


// // 4. Revision Ke Liye — Full Cheat Sheet
// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// // 📌 SYNTAX — T sirf ek naam hai, kuch bhi rakh sako
// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// function demo<T>(arg: T): T { return arg }
// //           ↑         ↑     ↑
// //      declare T   use T  return T — teeno same hone chahiye!


// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// // 📌 MULTIPLE GENERICS — 2 alag types ke liye
// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// function pair<T, U>(first: T, second: U): [T, U] {
//   return [first, second]
// }
// pair<string, number>("Age:", 25)  // ["Age:", 25]


// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// // 📌 CONSTRAINT — T pe limit lagao (extends)
// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// function getLength<T extends { length: number }>(arg: T): number {
//   return arg.length   // Sirf woh types jo .length rakhte hain
// }
// getLength("Hello")    // ✅ 5  — string has length
// getLength([1,2,3])    // ✅ 3  — array has length
// getLength(42)         // ❌ ERROR — number has no length!


// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// // 📌 TYPE INFERENCE — <T> likhna bhi zarori nahi!
// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// const result = identity(42)       // TypeScript khud samajh leta hai T = number
// const result2 = identity("Hi")    // T = string — automatically!


// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// // 📌 ONE LINE SUMMARY — Yaad rakh lo!
// // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// // any  = "mujhe parwah nahi kya type hai" → Type Safety ❌
// // <T>  = "jo bhi aaye, track karta hun"   → Type Safety ✅

// Constraints in Generics
// Simple Definition:
// Constraint matlab — T pe limit lagana ki "sirf woh types allow hain jo ye condition poori karein"

// Problem Bina Constraint Ke:
// T kuch bhi ho sakta hai — number, string, object, kuch bhi!
// function getLength<T>(arg: T): number {
//   return arg.length  // ❌ ERROR! 
//   // TypeScript kehta hai: "T pe .length hai hi nahi guaranteed!"
//   // Agar koi number pass kare to? Number pe .length nahi hota!
// }

// Solution — Constraint Lagao:
// T sirf woh types ho sakta hai jinka .length ho
// function getLength<T extends { length: number }>(arg: T): number {
//   return arg.length  // ✅ Ab safe hai!
// }

// getLength("Hello")   // ✅ 5   — string pe length hota hai
// getLength([1,2,3])   // ✅ 3   — array pe length hota hai
// getLength(42)        // ❌ ERROR — number pe length nahi hota!
// //                      TypeScript pehle hi pakad leta hai!

// Ek Aur Example — Interface Se Constraint:

// interface HasName {
//   name: string
// }

// // T sirf woh object ho sakta hai jisme 'name' field ho
// function greet<T extends HasName>(obj: T): string {
//   return `Hello, ${obj.name}!`
// }

// greet({ name: "Ali", age: 25 })   // ✅ "Hello, Ali!"
// greet({ name: "Sara" })           // ✅ "Hello, Sara!"
// greet({ age: 25 })                // ❌ ERROR — name field nahi hai!
// greet("Ali")                      // ❌ ERROR — string nahi chalega!

//  Ek Line Mein:
// extends = Gate lagana — sirf woh types andar aayein jo condition poori karein

