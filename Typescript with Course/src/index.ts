// Basic types
let id: number = 5;
 
// Tuple
let person: [number, string, boolean] = [1, 'Brain', true];

// Tuple Array
let employee: [number, string][];
employee = [
    [1, "Brain"],
    [2, "John"],
    [3, "Adam Brown"],
]

// Union
let p_id: string | number = 22;
p_id = '22';

// Enums
enum Direction1 {
    Up = 1, 
    Down, 
    Left,
    Right
}

console.log(Direction1.Up)


// Objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1, 
    name: 'John'
}



// Type Assertion
let cid: any = 1;
// let customId = <number>cid;
// Error
// customId = true

// or

let customId = cid as number;



// Functions
function addNum(x: number, y: number): number {
    return x + y;
}
console.log(addNum(1, 2));

function log(message: string | number): void {
    console.log(message);
}
log("Hello")


// Interfaces
interface UserInterface {
    readonly id: number
    name: string
    age?: number
}
const user1: UserInterface = {
    id: 1,
    name: "John",
}
// Error: id is readonly
// user1.id = 4;


// Difference between type and interface
type Point = number | string;  // you can't use interface here instead of type
const p1: Point = 1 // or "1"


// interfaces with Functions
interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;






interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes 
class Person implements Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(20, 'Adam Brown');
const mike = new Person(22, "Mike Jordan");
console.log(brad, mike)
console.log(brad.register())



// private, protected
class Cars {
    private isEngine: boolean // private, means we can only use it inside of this class
    protected color: string // protected means, we can use it in this class or other classes which extended from this class    
    constructor(isEngine: boolean, color: string) {
        this.isEngine = isEngine
        this.color = color;
    }
}