// Let's learn some typescript
// Author: Andile Jaden

export {}
let message = "Welcome Back"
console.log(message);

// For varaible declaration TypeScript uses let and const
// You cannot redeclare a variable if you use let or or const in typescript
// let variables can be declared but not initialised
// const variables cannot be declared without initialising
        // Example  
        // let sum; #this is ok
        // const title; #this is wrong
        // let name = 'Andile';
        // const title = 'Nexuslabs';

// Varaibales
// 1. boolean
// 2. number
// 3. string
// 4. null
// 5. undefined

// Basics types
let isBeginner: boolean = true;
let total: number = 1;
let name: string = 'Andile';
let programming_lang: string='Typescript'


let sentence: string = `My name is ${name}
I am a beginner in ${programming_lang}`;

console.log(sentence)

// variables: null and undefined are also classified as subtypes of all the other types
// we can assign null val to either a boolean, number etc
let n: null = null;
let unde: undefined= undefined;

let isNew: boolean=null;
let myName: string=undefined;

// Arrays
let list1: number[] = [1,2,3,4,5];
let list2: Array<number> =[1,2,3,4,5];

// tuple type
let person1: [string, number] =['Andile', 22]

// enum type
// Enum is code friendly
enum Color {Red, Green, Blue};

let color: Color = Color.Blue
console.log(color)

// Any type
// It rids of errors in case the value type is unknown
let randomVal: any =12;
randomVal=true;
randomVal='Andile M';

let myVar: any=10;
console.log(myVar.name);
// myVar();
// myVar.toUpperCase();

// Unknown type
// Unlike ANY it sees errors, however to convince it otherwise we can use type assertion
let myOtherVar: unknown = 'Andile Jaden';

function hasName(obj: any): obj is {name: string}{
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}
if (hasName(myOtherVar)){
    console.log(myOtherVar.name);
}
else{
    console.log('There is no name');
}
(myOtherVar as string).toUpperCase();
// console.log(myOtherVar);

// Assigning multitypes
let multitype: number | boolean;
multitype =20;
multitype =true;

let anyType: any;
anyType = 20;

function add(num1: number, num2: number){
    return num1 + num2
}
add(5, 8)

// Interfaces
// It is possible to specify a object as the type in typescript

interface Person{
    firstName: string;
    lastName: string;
    age?: number;
}

function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName} is ${person.age}`);
}

let p ={
    firstName: 'Andile',
    lastName: 'Mbele',
    age: 23
};

fullName(p)

// Class Modifiers
class Employee{
    employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Andile');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{

    constructor(managerName: string){
        super(managerName);
    }

    delegateWork(){
        console.log('Manager delegating tasks')
    }
}

let m1 = new Manager('Google Jr');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

// Access Modifiers
// By default each class member is public

// Can be achieved by restricting access to class members by using modifiers such as 'private' and 'public'
