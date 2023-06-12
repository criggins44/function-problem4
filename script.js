/*function fizzBuzz(){
  for(let i = 1; i <= 10; i++){
    let word = ""; //to reduce conditionals, we can construct the word & check two things instead of three.

    if (i % 3 ===0){                           
      word += "Fizz";
    }
    if (i % 5 ===0){                    
      word += "Buzz";
    }

    console.log(i, word);  
  }
}

fizzBuzz();
*/

function fizzBuzz(){
	for (let i = 1; i <= 10; i ++){
		if (i % 3 ===0){
			return "Fizz";
		}
		if (i % 5 ===0){
			return "Buzz";
		} 
		console.log(i)
	}
	
}

fizzBuzz();