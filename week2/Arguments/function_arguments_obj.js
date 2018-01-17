function findAverage(){
	let numberOfArguments = arguments.length;
	let summation = 0
	for(i = 0; i < numberOfArguments; i++){
		//equivalent to 'summation = summation + arguments[i]'
		summation += arguments[i];	
	}
    let average = summation / numberOfArguments;
    return average;
}

console.log("The findAverage function takes in " + findAverage.length + " formal number of arguments per its definition");

let functionResult = findAverage(1,2,3,4,5);
console.log(functionResult);
