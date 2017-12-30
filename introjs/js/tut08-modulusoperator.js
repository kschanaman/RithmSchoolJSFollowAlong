function moduloFunc() {     // Our humble little function that is called when button is clicked

    // I like to set up my variables up front, ahead of time. The first (firstNum) will 
    // hold the user-entered data from the form field containing the ID 'firstNumber'. 
    // I use JavaScript's 'parseFloat' to convert it from form-submitted string to a float 
    // number.  I do the same with variable 'secondNum', which holds the value of whatever 
    // the user entered into the form field containing the ID 'secondNumber'. 

    var firstNum  = parseFloat(document.getElementById("firstNumber").value);
    var secondNum = parseFloat(document.getElementById("secondNumber").value);
    
    // Locate the element in the HTML document that has the ID of 'p1' and assign it 
    // to a new variable called pId.  This will save typing later on.

    var pId = document.getElementById("p1");

    // If the first number is divisible by the second number with no remainder...
    if (firstNum % secondNum === 0) {

        // Change the inner HTML in the page element to the following
        pId.innerHTML = "Result: " + firstNum + " divided by " + secondNum + " is " + 
            (firstNum / secondNum) + " and is therefore evenly divisible.";

    // Or else, if the first number is not divisible by the second number and has a remainder...
    } else if (firstNum % secondNum !== 0) {
        pId.innerHTML = "Result: " + firstNum + " divided by " + secondNum + " is " +
            (firstNum / secondNum) + " and is therefore NOT evenly divisible.";

    // If none of the above is the case... 
    } else {
        pId.innerHTML = "Sorry, invalid number or character was entered. Try again.";
    }

}
