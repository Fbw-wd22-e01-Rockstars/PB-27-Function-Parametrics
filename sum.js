// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...arg) => {
    let result = 0;
    for(let i = 0; i<arg.length; i++){
        result += arg[i]
    }
    return result
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
console.log(sum(25, 25, 20,24,4,5,6,8))



/* function printNumbers (a,...b){
    console.log(a,b)
}

printNumbers(1,3,6,4,6) */