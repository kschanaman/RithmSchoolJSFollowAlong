document.addEventListener("DOMContentLoaded", main, false); // Wait for DOM elements all loaded

function main() {

    // Nothing done in main() except a call to our 'displayOddNumbers' function
    displayOddNumbers();

}


function displayOddNumbers() {  // Here is our function that does the heavy exercise lifting

    var out         = document.getElementById("p1");    // Get our HTML page's output element
    var numbers     = [1,2,3,4,5,6,7,8,9,10];           // Numbers array from 1 to 10
    var outputArr   = [];                               // Array to store odd numbers 4 display
    var counter     = 0;                                // Counter variable, initialized to 0

    // Going to use a for loop to iterate through each element in 'numbers[]' to full length
    for (counter=0; counter < numbers.length; counter++) {

        // If the current element in 'numbers[]' divided by two has a remainder...
        if (numbers[counter] % 2 !== 0) {

            // It is therefore an odd number. Push this numbers element to end of 
            // outputArr.
            outputArr.push(numbers[counter]);

        } // Close 'if' statement

    } // Close 'for' statement
    
    // Output the contents of outputArr[] to our HTML page output location...
    out.innerHTML="Odd numbers in our array are: " + outputArr;    

    // All Done, Go Bye-Bye! :D
}
