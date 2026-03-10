// any, unknown
// Type: any
// let anyVariable: any;
// anyVariable = "Good"
// anyVariable = () => console.log("Where There");
// anyVariable = 20
// console.log(anyVariable.toFixed(3))
// Note:  Avoid to use any BCZ it curse the purpose of TypeSafety
// Type: unknown
let unknownVariable;
unknownVariable = 25;
// console.log(unknownVariable.toFixed(3))  unknown ke case ma ye mujhe directly allow nhi krega to perofrm this operation on it but operation perofrm ho jaiga. lekin ye mujhe err dega ke variable unknown type ka ha so ap kmaise is pr wo operfation perfrom kr rhe ho jo numbers pr perform krta ha. ye avhoi cheez ha so agr ab mujhe ye operatioon perofrm krn aha to mujhe check lga na prega. or agr real world [prokject ma mujhe aesa krn aha to agr ma sure ho ke specifc variable jsko mane unknown type di thi wo ab let suppose array hi hoga so ma uski type ko change krsta hu.
if (typeof unknownVariable === "number") {
    console.log(unknownVariable.toFixed(2));
}
let isQualified;
unknownVariable = true;
if (typeof unknownVariable === "boolean") {
    isQualified = unknownVariable;
    console.log(isQualified);
}
export {};
