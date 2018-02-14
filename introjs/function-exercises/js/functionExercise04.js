document.addEventListener("DOMContentLoaded", main, false);

function main() {

    displayEvenNumbers();       // Call the 'displayEvenNumbers' function below

}

function displayEvenNumbers() {

    // First, let's set up our variables here.

    var out     = document.getElementById("p1");    //  Get page element for output (p1)
    var counter = 0;                                //  Set counter to zero
    var numbers = [1,2,3,4,5,6,7,8,9,10];           //  Our numbers array with some nums in it
    var outArr  = [];                               //  Array to store our even nums for output

    // Now let's use a for loop to iterate through the numbers of the 'numbers' array, and an 
    // 'if' statement to check whether each number is divisible by two (has no remainder).
    // If the number is even then, push it to the array 'outArr' for output to the HTML page.

    for (counter; counter < numbers.length; counter++) {
        if (numbers[counter] % 2 === 0) {                   // Has no denoninator, then...
            outArr.push(numbers[counter]);                  // Push to the outArr array.
        }
    }

    // Now output the resulting array to the output location of the HTML page (the bottom).

    out.innerHTML="Even numbers in the numbers[] array are: " + outArr;
    
}
