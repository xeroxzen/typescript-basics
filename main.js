"use strict";
// Let's learn some typescript
// Author: Andile Jaden
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome Back";
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
var isBeginner = true;
var total = 1;
var name = 'Andile';
var programming_lang = 'Typescript';
var sentence = "My name is " + name + "\nI am a beginner in " + programming_lang;
console.log(sentence);
// variables: null and undefined are also classified as subtypes of all the other types
// we can assign null val to either a boolean, number etc
var n = null;
var unde = undefined;
var isNew = null;
var myName = undefined;
// Arrays
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
// tuple type
var person1 = ['Andile', 22];
// enum type
// Enum is code friendly
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Blue;
console.log(color);
// Any type
// It rids of errors in case the value type is unknown
var randomVal = 12;
randomVal = true;
randomVal = 'Andile M';
var myVar = 10;
console.log(myVar.name);
// myVar();
// myVar.toUpperCase();
// Unknown type
// Unlike ANY it sees errors, however to convince it otherwise we can use type assertion
var myOtherVar = 'Andile Jaden';
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myOtherVar)) {
    console.log(myOtherVar.name);
}
else {
    console.log('There is no name');
}
myOtherVar.toUpperCase();
// console.log(myOtherVar);
// Assigning multitypes
var multitype;
multitype = 20;
multitype = true;
var anyType;
anyType = 20;
function add(num1, num2) {
    return num1 + num2;
}
add(5, 8);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName + " is " + person.age);
}
var p = {
    firstName: 'Andile',
    lastName: 'Mbele',
    age: 23
};
fullName(p);
// Class Modifiers
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Andile');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Google Jr');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
// Access Modifiers
// By default each class member is public
// Can be achieved by restricting access to class members by using modifiers such as 'private' and 'public'
