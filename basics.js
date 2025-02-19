console.log("welcome");
console.log(3435);
console.log(23+55);
// variables: its like a container to store a value
let a =90
let b=45

console.log(a);
console.log(a+b);

// to declare a variable we have 3 keywords in js. var, let and const


var x=45

var x=67 // redeclaration

console.log(x);


x=90 // reassign 

//let a =56    we cant re declare

a=23  // reassigning is allowed in let


const c =56

// we can not redeclare and reassign

console.log(v);
// console.log(t);

var v=56
let t=78.78

// hoisting: the declaration part will be moved to top of the function in var keyword, that is known as hoisting

// Data types: Primitive data types: numbers, string , boolean(true(1) or false(0)), null, undefined
// non primitive dt : array and objects

let g
console.log(g);
let h=null

let userName = "Elaiyavan"
let isActive = true
let arr = [34,56,66,"cat", true,{},[]]

let obj = {
    a:34,
    b:34,
    c:"dnfdf",
    d:true,
    e:[],
    f:{}
}


// rules for declaring a variaables;
// 1. do not begin with numbers and special chars(except _)  
// e.g : let 1user(not valid)
// 2. do not leave any spaces b/w var names
// e.g: let user Name(invalid), userName(camelCases)
// 3. do not use any keyword as a variable name
// 4. give reasonable names


// scope of variables:
// 1. global scope 2. local scope

{
    let name = 'test'  // block scoped variable(const also)
    var age = 12
    console.log(name, age);
    
}

console.log(age);  // global scope variable

let l=56
l="hello"
// we can assign any values to any variables. so its called dynamic or untyped language.











