// There are 2 typed of data Premitive and Reference (Non premitive)
/* Primitive data types are generally immutable, meaning their value cannot be changed once created. Non-primitive data structures are mutable, meaning their contents can be modified. */

// Primitive data types are call by value.

/* "Pass by Value" in JavaScript
When a variable is passed by value, a copy of the actual value is passed to the function. Any changes made to the parameter inside the function do not affect the original variable. Primitive data types are usually stored in the stack memory. */


let a = 10
let b = a //copy of a is copied to b
a = 20 
console.log(a); // Outputs: 20
console.log(b); // Outputs: 10

/* In this example,
The value of n (10) is copied to x.
Modifying x inside the function does not affect n because x is a separate copy.

In JavaScript, primitive data types are passed by value. These include:

Numbers
Strings
Booleans
Undefined
Null
Symbol
BigInt */

const num = 100
const str = "string type"
const bool = false
const nullType = null
const symType = Symbol('123') //=> type will be symbol
const biginType = 124798323231n


//JavaScript is a weakly typed language, which means a data value doesn't need to be explicitly marked as a specific data type. Unlike a strongly typed language like const score:number = 100

// Reference type (non primitive) typeof is usually object. Non-primitive data structures are typically stored in heap memory.
// Array, objects, functions

/* "Pass by Reference" in JavaScript
When a variable is passed by reference, a reference to the actual data is passed. This means changes made to the parameter inside the function affect the original variable. */

let obj = { name: "AAA" };

function modify(o) {
    o.name = "BBB";
    console.log("Inside function: ", o.name);
}

modify(obj);
console.log("Outside function: ", obj.name);

/* Output
Inside function:  BBB
Outside function:  BBB */

const arr = ["zero", "one", "two"];
let myObj ={
    name:"SJ",
    age:40
}

let fun = function(){
    console.log("function")
}