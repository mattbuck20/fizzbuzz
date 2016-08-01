$(document).ready(function() {
    for(var number = 1;number < 101;number++) {
		if(number % 3 == 0  && number % 5 == 0) {
			document.write("<p>FizzBuzz</p>");
		}
		else if(number % 3 == 0) {
			document.write("<p>Fizz</p>");
		}
		else if(number % 5 == 0) {
			document.write("<p>Buzz</p>");
		}
		else {
			document.write("<p>" + number + "</p>");
		}
	}
});