/* Unknown */

// provide a type that tells the compiler and future readers that this variable could be anything
let notSure: unknown = 4;
notSure = 'Maybe a string instead';
//OK, definitely a boolean
notSure = false;

let obj: unknown = {};
obj = 10;
// TS Error;
// obj.test = 1;