/******************************
STANDARD VS ARROW FUNCTIONS
******************************/

// add two numbers
let add = function(x,y) {
    return x + y;
}

// arrow function
let add2 = (x,y) => (x + y);

// run to to console
console.log(add(5,10));
console.log(add2(10,10));
console.log("--------------------")

/******************************
MULTIPLE PARAMETERS
******************************/

// use a "compareFunction"
// sort in descending order
let numbers = [10, 30, 20];
let myFunction = function(a,b) {
    numbers.push(a)
    a - b;
    console.log(numbers);
};

myFunction(0, 5);



// arrow function
// let numbers2 = [10, 30, 20];
// numbers2.sort((a,b) => b - a)