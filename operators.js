// operators: it is a symbols. using that we can perform some operations.

// Arithmatic operators:
// +,-,*,/,%(modulus),++,-- 

console.log(10/5);
console.log(10%4);// it will return the remainder value
// increment:(++)
// pre increment:

let x=9

console.log(++x); // x=x+1
// post inc:

console.log(x++); // x+1
console.log(x);


// decrement:--
// pre decrement:

console.log(--x); // x=x-1
// post decrement
console.log(x--); // x-1

console.log(1+6);
console.log("a"+"b");  // it will join the string

console.log("a"-"b"); // it is not possible

console.log("5"+"9");  // joining


console.log("9"-"7");  

console.log("5"*8);


// type coercion(type conversion): the process that value will be converted from one type to another type


// Comparison operators:
// <,>,<=,>=,==,!=

console.log(12>7);
console.log(12<6);
console.log(12==12);
console.log(12!=11);

console.log(12===12);

console.log(12=="12");// type coercion happens here.
console.log(12==="12"); // type coercion not happened here.



// logical operator:
// And(&&), OR(||), NOT(!)

// AND(&&): if all of the condn gets true , it will return true

console.log(12>5 && 56>23 && 89>123);
// OR(||): if any one of the condn gets true it will return true
console.log(45>34 || 23>89 || 87>167 || 12>14);


// NOT(!): it just reverse the result
// 
console.log(!(67>90));

// Assignment operator =
// +=, -=, *=, /=, %=

let a=90

console.log(a+=12); // a=a+12
console.log(a-=10);  // a=a-10

// miscellaneous operator
// conditional opertor:(ternery operator)

// syntax: variable = condn ? st1: st2

let m =11

let r= m>=35 ? "pass" : "fail"
console.log(r);

// typeof operator:

console.log(typeof m);
console.log(typeof r);



// declare one age and check it is eligible for vote or not



let age=17
let e= age>=18 ? "Eligible" : "Not Eligible"
console.log(e);




















