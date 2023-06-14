let fizzBuzz = () => {
	for (let i = 1; i < 100; i ++){
		let multiple = ""
//provides a place to insert fizz and buzz

		if (i % 3 === 0) {multiple += "Fizz";}
		if (i % 5 === 0) {multiple += "Buzz";}
//used the modelo to set the remainder to 0 if divided by 3 or 5

		console.log(i, multiple);
//prints the increasing index of numbers and the value of the multiple variable
	}
		
}

fizzBuzz();
