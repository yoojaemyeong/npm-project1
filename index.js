function add(a,b){
    return a + b;
}
function sum(numbers) {
    let result = 0;
    for (const number of numbers) {
	result += number;
    }
    return result;
}
function sub(a,b){
    return a - b;
}
function hi(){
    console.log("Hi, everyone !!");
}

module.exports = { add, sum, hi };
