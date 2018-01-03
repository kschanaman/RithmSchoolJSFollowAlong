// Create a main() function to be called by the HTML submit button
function main() {

    // Declare variables and parse the entries from the user to make sure they are converted 
    // to numbers if possible. This is done with parseFloat since we don't know whether the 
    // user will enter an integer or a floating-point decimal. Correct output will depend on 
    // this if the user enters floating-point nums... 

    var firstNum = parseFloat(document.getElementById("getFirstNum").value);
    var secondNum = parseFloat(document.getElementById("getSecondNum").value);
    

    var out = document.getElementById("p1");    // Grab the element where output will go, assign to 'out'
    var sum = 0.0;                              // Set initial sum to 0.0
    var tries = 1;                              // Gonna get 'cute' later in the program. Set tries to 1

    // Here is our 'while loop'.  If the user enters anything other than a valid number, 
    // the entry will appear as Not a Number (NaN).  As long as either the first or second 
    // number is NaN, do what is enclosed in the curly braces...

    while (isNaN(firstNum) || isNaN(secondNum)) {
        out.innerHTML="Sorry, one of the entries is not a number. Please enter numbers only!";
        firstNum = parseFloat(prompt("One of your entries was not a number. Enter first number: "));
        secondNum = parseFloat(prompt("Enter second number: "));
        
        tries++;    // User is now accumulating more tries to get this entered right... 
                    // Increment tries by one each time we go through this loop

    }   // Close out our 'while loop' here.
    
    sum = firstNum + secondNum;     // Do the calculation and assign result to variable 'sum'

    // Now I'm going to get cute here, just for giggles, of course! 
    // IF it took more than one try for the user to get the number entries correct, issue 
    // a bit of a tease (hopefully this won't cause irreparable offense :D

    if (tries > 1) {    // IF tries is greater than 1 try...

        // DO THIS... 

        out.innerHTML="Geez, it took you " + tries + " tries to use a simple calculator? Wow!<br>" + 
            "At any rate, the result of your calculation is: " + sum;

    // IF the user got the number entries correct on the first go 'round, provide a different
    // message (minus the tease provided in the above response).

    } else {

        out.innerHTML = "Thank you! The result of your operation is: " + 
            firstNum + " + " + secondNum + " = " + sum + "<br>Can I have my beer now? Or does it " +
            "come later?";
    }

    resetForm();    // Reset the form fields in case the user wants to start over again for fun

}   // Close out our main() function here

// A tiny little function that clears the form fields when called. I know functions 
// haven't been learned yet if my reader is following along with the Rithm School course, 
// but I'm using them simply because I had been exposed to them before. Don't fret, you'll 
// get there :)

function resetForm() {

    document.getElementById("getTwoNums").reset();

}
