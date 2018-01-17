function findAverage(firstNumber, secondNumber, thirdNumber){
	if(firstNumber === undefined || secondNumber === undefined || thirdNumber === undefined){
		return 0;
	}
	let summation = firstNumber + secondNumber + thirdNumber;
	let average = summation / 3;
	return average;
}

let functionResult = findAverage(1,2);
console.log(functionResult);
