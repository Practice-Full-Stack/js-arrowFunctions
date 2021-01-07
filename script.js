/***********************************
STANDARD VS ARROW FUNCTION
***********************************/

// add two numbers
let add = function(x,y) {
    return x + y;
}

// arrow function
let add2 = (x,y) => (x + y);

// print to console
console.log(add(5,10));
console.log(add2(10,10));

/***********************************
ABOUT COMPARE FUNCTIONS
***********************************/

// for ascending use the sort() method
let strings = ["cake", "apple", "fig", "banana"];
console.log(strings.sort());

// for descending combine sort() with reverse()
let strings2 = ["cake", "apple", "banana", "fig"];
strings2.sort();
console.log(strings.reverse());
console.log("-----")

// for ascending numbers use sort()
let nums = [50, 10, 90, 20];
console.log(nums.sort());

/********** USE COMPARE FUNCTION **********/

// for descending numbers  we need to create a "compare function" that returns -1, 0, or 1
// if compareFunction(a,b) returns less than 0, sort "a" lower than "b"
// if compareFunction(a,b) returns 0, leave "a" and "b" unchanged ...
// if compareFunction(a,b) returns greater than 0, sort "b" lower than "a"

function compareFunction(a,b) {return b-a;}

// use function logic to sort "nums"
nums.sort(compareFunction);
console.log(nums);
console.log("-----")

/********** NEST COMPARE FUNCTION **********/

// nesting a local compare function is also possible
nums2 = [200, 100, 600, 300];
nums2.sort(function(a,b){
    return b-a;
})
console.log(nums2);

// revert to ascending via "compare function"
console.log(nums2.sort(function(a,b){
    return a-b;
}));

/********** COMPARE ARROW FUNCTION **********/

