let fizzBuzz = () => {
	for (let i = 1; i < 100; i ++){
		let multiple = ""
		if (i % 3 === 0) {multiple += "Fizz";}
		if (i % 5 === 0) {multiple += "Buzz";}
		console.log(i, multiple);
	}
		
}

fizzBuzz();
