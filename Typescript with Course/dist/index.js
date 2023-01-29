"use strict";
// Basic types
let id = 5;
// Tuple
let person = [1, 'Brain', true];
// Tuple Array
let employee;
employee = [
    [1, "Brain"],
    [2, "John"],
    [3, "Adam Brown"],
];
// Union
let p_id = 22;
p_id = '22';
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
const user = {
    id: 1,
    name: 'John'
};
// Type Assertion
let cid = 1;
// let customId = <number>cid;
// Error
// customId = true
// or
let customId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
log("Hello");
const user1 = {
    id: 1,
    name: "John",
};
const p1 = 1; // or "1"
const add = (x, y) => x + y;
// Classes 
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(20, 'Adam Brown');
const mike = new Person(22, "Mike Jordan");
console.log(brad, mike);
console.log(brad.register());
// private, protected
class Cars {
    constructor(isEngine, color) {
        this.isEngine = isEngine;
        this.color = color;
    }
}
