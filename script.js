/****************************************
STANDARD VS ARROW FUNCTION
****************************************/

// add two numbers
let add = function(x,y) {
    return x + y;
}

// arrow function
let add2 = (x,y) => (x + y);

// print to console
console.log(add(5,10));
console.log(add2(10,10));


/****************************************
COMPARE FUNCTIONS (NON-RELATED)
****************************************/

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

/********** CREATE COMPARE FUNCTION **********/
// for descending numbers  we need to create a "compare function" that returns -1, 0, or 1
// if compareFunction(a,b) returns less than 0, sort "a" lower than "b"
// if compareFunction(a,b) returns 0, leave "a" and "b" unchanged ...
// if compareFunction(a,b) returns greater than 0, sort "b" lower than "a"

function compareFunction(a,b) {
    return b-a;
}

// use function logic to sort "nums"
nums.sort(compareFunction);
console.log(nums);
console.log("-----")


/********** NEST COMPARE FUNCTION **********/

// nest compare function in sort() method
nums2 = [200, 100, 600, 300];
nums2.sort(function(a,b){
    return b-a;
})
console.log(nums2);

// practice compare function (sort ascending)
console.log(nums2.sort(function(a,b){
    return a-b;
}));
console.log("----");


/********** SORT ARRAY OF OBJECTS **********/

// create array of objects (to compare)
let items = [
    {name:'John', skill:'gaming', age:35},
    {name:'Haru', skill:'sassy', age:38},
    {name:'Shane', skill:'prayer', age:44},
    {name:'James', skill:'intensity', age:37}
];

// sort by numberic value (via 'age' property)
items.sort(function(a,b) {return a.age - b.age;});
console.log(items);

// sort string ascending (via 'name' property)
items.sort(function(a,b) {
    // ignore upper and lowercase
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    // lower index if name is lower
    if (nameA < nameB) {
        return -1;
    }
    // higher index if name is higher
    if (nameA > nameB) {
        return 1;
    }
    // else leave unchanged
    return 0;
});console.log(items)

// sort string descending (via 'skill' property)
items.sort(function(a,b) {
    var nameA = a.skill.toUpperCase();
    var nameB = b.skill.toUpperCase();
    if (nameA < nameB) {return -1;}
    if (nameA > nameB) {return 1;}
    return 0;
}); console.log(items);


/****************************************
COMPAR FUNCTION (ARROW SYNTAX)
****************************************/

// phew, we finally understand compare functions ...
// let's compare now using the arrow function syntax

// sort descending
let nums3 = [9, 3, 0, 12, 15, 6];
nums3.sort((a,b) => b - a);
console.log(nums3);

// sort ascending
nums3.sort((a,b) => a - b);
console.log(nums3);


/****************************************
SINGLE PARAMETER (ARROW FUNCTIONS)
****************************************/

// example (both sytax's are acceptable)
(p) => { statements }
p => { statements }

// single param arrow function within map() method)
let names = ['Michael', 'Pam', 'Dwight', 'Toby'];
let lengths = names.map(a => a.length);
console.log(lengths);
console.log("----");


/****************************************
ARROW FUNCTION SYNTAX
****************************************/

// you must you must use parenthesis IF no parameters
() => { statements }


// example --> function returns reference to document in window
let logFunc = function() {console.log(window.document);}
logFunc()

// same using arrow function with no parameters
let logFunc2 = () => {console.log(window.document);}
logFunc2()

console.log("----");


/********** LINE BREAKS RULES **********/

// JAVASCRIPT DOESN'T ALLOW line breaks between () and => 
// (the param definition and the arrow)

// Below causes a sytnax error
// let multiply = (x,y)
// => console.log(x * y);

// JAVASCRIPT DOES ALLOW line breaks between paramaters
let multiply = (
    x,
    y
 ) =>
 console.log(x * y);
 multiply(3, 3);

 
 /********** EXPRESSION VS STATEMENT **********/

 
