// any and unknown types

// Type: any
let someVariable: any = true
someVariable = 120
someVariable = "Hello"
// someVariable.toFixed() Now ye method sirf numbers pa kam krta ha but hum ne to string pass ki hui ha or because ye any type ha to is na err nhi dya but console ma hume err mul rha ha.
// So do not use type any BCZ is ko use kra sa TypeScript ka purpose hi khtam ho jata ha ye apko err hi nhi de ga ap jo marzi assign kro varaible ma so aavoid it.


// Type: unknown
let someVariable2: unknown = true
someVariable2 = "Hello"
someVariable2 = 120
// Y mujhe err dega : 'someVariable2' is of type 'unknown'. jis ki waja sa pehel hum check krega ke varailbe ma kya stored ha or uski base pr hum methods appply krega ya koi bhi actrion perfrom krega so in that case Unknown is far better then type any
// someVariable2.toFixed() // 'someVariable2' is of type 'unknown'.

// if(typeof someVariable2 === "string") {
//     console.log(someVariable2.toFixed(3)) // Throw Err that this method is not available for the type string
// } 

if(typeof someVariable2 === "number") {
    console.log(someVariable2.toFixed(3))
} 


// Example 
let justNumber: number = 200
// justNumber = someVariable2 Ye allow nhi krega however someVariable2 ma number hi stored ha but still allow nhi krega so mujhe check lgana prega

if(typeof someVariable2 === "number") {
    justNumber = someVariable2
}
console.log(justNumber)


// So What to use and when?
// Type any: Try to Avoid it Mat use krain.
// Type unknown: Helpful jb huma nhi pta ho ka value kia hogi so it will remind us later when we try to use it and then we will choose the correct type for the variable.  


// IMP Use Case: jb JavaScript ke Projects ko Typescript ma migrate kya jata ha then initaly hum sare variables ko any set krtha ha but agr small project ha to hum type unknown suse kr skte ha to add check and get better code output.