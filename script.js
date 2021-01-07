/******************************
STANDARD VS ARROW FUNCTION
******************************/

// add two numbers
let add = function(x,y) {
    return x + y;
}

// arrow function
let add2 = (x,y) => (x + y);

// print to console
console.log(add(5,10));
console.log(add2(10,10));

/******************************
"COMPARE FUNCTION"
******************************/

// for ascending use the .sort() method
let strings = ["cake", "apple", "fig", "banana"];
console.log(strings.sort());

// for descending combine with .reverse()
let strings2 = ["cake", "apple", "banana", "fig"];
strings2.sort();
console.log(strings.reverse());

// NUMBERS ARE HARDER
let nums = [50, 10, 90, 20];
nums.sort(function(a,b){
    return b-a;
})

// console.log(nums.sort());

// USE A "COMPARE FUNCTION"
nums.push(30);
console.log(nums);





// arrow function
// let numbers2 = [10, 30, 20];
// numbers2.sort((a,b) => b - a)