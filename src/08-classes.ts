
// ========================================
// TYPESCRIPT CLASSES - COMPLETE GUIDE
// ========================================

// classes
// declare a class
// readonly property
// class fields
// public, private modifiers
// private methods
// getters, setters
// child class
// super keyword
// protected modifier
// abstract classes and methods
// implements interfaces
// short syntax for constructor method



// ========================================
// 1. DECLARE A CLASS
// ========================================

class Car {
  brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

const myCar = new Car("Toyota");
console.log(myCar.brand); // Toyota


// ========================================
// 2. CLASS FIELDS (declare directly)
// ========================================

class Person {
  // Class fields - directly declare karo bina constructor ke
  name: string = "Unknown";
  age: number = 0;
  isAlive: boolean = true;
}

const p1 = new Person();
console.log(p1.name);    // Unknown
console.log(p1.isAlive); // true


// ========================================
// 3. READONLY PROPERTY
// ========================================

class Bank {
  readonly bankName: string; // sirf read ho sakta hai, change nahi

  constructor(bankName: string) {
    this.bankName = bankName;
  }
}

const myBank = new Bank("HBL");
console.log(myBank.bankName); // HBL
// myBank.bankName = "MCB";   // ❌ ERROR! readonly hai change nahi ho sakta


// ========================================
// 4. PUBLIC & PRIVATE MODIFIERS
// ========================================

class Student {
  public name: string;    // ✅ bahar se access ho sakta hai
  private grade: string;  // ❌ sirf class ke andar access hoga

  constructor(name: string, grade: string) {
    this.name = name;
    this.grade = grade;
  }

  // grade ko andar se access karna
  public getGrade(): string {
    return this.grade; // ✅ class ke andar hai to allowed hai
  }
}

const s1 = new Student("Arslan", "A+");
console.log(s1.name);       // ✅ Arslan
console.log(s1.getGrade()); // ✅ A+
// console.log(s1.grade);   // ❌ ERROR! private hai


// ========================================
// 5. PRIVATE METHODS
// ========================================

class ATM {
  private balance: number = 50000;

  // private method - sirf class ke andar chalega
  private checkBalance(): boolean {
    return this.balance > 0;
  }

  // public method - bahar se call kar sakte hain
  public withdraw(amount: number): void {
    if (this.checkBalance()) { // private method andar se call kiya
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}, Remaining: ${this.balance}`);
    } else {
      console.log("Insufficient balance!");
    }
  }
}

const atm = new ATM();
atm.withdraw(1000);       // ✅ Withdrawn: 1000, Remaining: 49000
// atm.checkBalance();    // ❌ ERROR! private method hai


// ========================================
// 6. GETTERS & SETTERS
// ========================================

class Employee {
  private _salary: number = 0; // convention: private ke liye _ lagao

  // GETTER - value read karne ke liye
  get salary(): number {
    return this._salary;
  }

  // SETTER - value set karne se pehle validation
  set salary(amount: number) {
    if (amount < 0) {
      console.log("Salary cannot be negative!");
    } else {
      this._salary = amount;
    }
  }
}

const emp = new Employee();
emp.salary = 80000;          // setter call hoga
console.log(emp.salary);     // getter call hoga → 80000
emp.salary = -5000;          // "Salary cannot be negative!"


// ========================================
// 7. CHILD CLASS (Inheritance)
// ========================================

// Parent class
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

// Child class - Animal ki properties inherit karega
class Dog extends Animal {
  public breed: string;

  constructor(name: string, breed: string) {
    super(name); // parent constructor call karna zaroori hai
    this.breed = breed;
  }

  // override parent method
  public makeSound(): void {
    console.log(`${this.name} says: Woof! 🐶`);
  }
}

const dog1 = new Dog("Bruno", "Labrador");
dog1.makeSound();            // Bruno says: Woof! 🐶
console.log(dog1.name);      // Bruno (Animal se mila)
console.log(dog1.breed);     // Labrador (Dog ka apna)


// ========================================
// 8. SUPER KEYWORD
// ========================================

class Vehicle {
  public speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  public describe(): void {
    console.log(`Speed: ${this.speed} km/h`);
  }
}

class SportsCar extends Vehicle {
  public turbo: boolean;

  constructor(speed: number, turbo: boolean) {
    super(speed); // ← parent ka constructor call kiya
    this.turbo = turbo;
  }

  public describe(): void {
    super.describe(); // ← parent ka method bhi call kiya
    console.log(`Turbo: ${this.turbo}`);
  }
}

const sc = new SportsCar(300, true);
sc.describe();
// Speed: 300 km/h
// Turbo: true


// ========================================
// 9. PROTECTED MODIFIER
// ========================================

class BankAccount {
  protected balance: number = 10000;
  // protected = private jaisa hai BUT child class mein bhi access hoga

  public showBalance(): void {
    console.log(`Balance: ${this.balance}`);
  }
}

class SavingsAccount extends BankAccount {
  public addInterest(): void {
    this.balance += this.balance * 0.05; // ✅ protected access in child
    console.log(`After interest: ${this.balance}`);
  }
}

const acc = new SavingsAccount();
acc.showBalance();   // Balance: 10000
acc.addInterest();   // After interest: 10500
// acc.balance;      // ❌ ERROR! protected - bahar access nahi


// ========================================
// 10. ABSTRACT CLASS & METHODS
// ========================================

// Abstract class = directly use nahi ho sakti, sirf inherit hoti hai
abstract class Shape {
  abstract getArea(): number; // abstract method = child mein likhna ZAROORI hai

  public describe(): void {
    console.log(`Area is: ${this.getArea()}`); // getArea child se aayega
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  // abstract method implement karna zaroori hai
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

const c = new Circle(5);
c.describe(); // Area is: 78.53...

const r = new Rectangle(4, 6);
r.describe(); // Area is: 24

// const s = new Shape(); // ❌ ERROR! Abstract class directly use nahi hoti


// ========================================
// 11. IMPLEMENTS INTERFACE
// ========================================

// Interface = ek contract hai jo class ko follow karna hoga
interface Flyable {
  fly(): void;
  altitude: number;
}

interface Swimmable {
  swim(): void;
}

// Class ek saath multiple interfaces implement kar sakti hai
class Duck implements Flyable, Swimmable {
  altitude: number = 100; // Flyable ka property

  fly(): void {
    console.log(`Duck flying at ${this.altitude}m 🦆`);
  }

  swim(): void {
    console.log("Duck swimming 🌊");
  }
}

const duck = new Duck();
duck.fly();  // Duck flying at 100m 🦆
duck.swim(); // Duck swimming 🌊


// ========================================
// 12. SHORT SYNTAX FOR CONSTRUCTOR
// ========================================

// Normal (lamba) tarika 👇
class UserLong {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Short syntax (chhota tarika) 👇 - same kaam, kam code!
class UserShort {
  constructor(
    public name: string,   // automatically property ban jaegi
    private age: number    // automatically private property ban jaegi
  ) {}                     // constructor body empty!
}

const u1 = new UserShort("Arslan", 25);
console.log(u1.name); // Arslan ✅
