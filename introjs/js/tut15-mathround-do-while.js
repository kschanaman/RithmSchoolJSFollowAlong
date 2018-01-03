// Wait for Document Object Model (DOM) to be fully loaded first before execution of code below
document.addEventListener("DOMContentLoaded", main, false); 

// main() function that executes once DOM has been fully loaded (the line above)
function main() {           

    // Set up our array filled with a number of floating point numbers to be rounded
    var floatArray = [1.1, 2.1, 1.6, 3.1, 1.8, 2.9, 5.5, 3.14, 7.62, 39.7];

    // Set up our variables ahead of time for ease of use and keeping code readable
    
    var resultWriter = document.getElementById("p1");   // Element of HTML page to write out to
    
    var resultArray = [];               // To put our results in for display to HTML page
    var counter = 0;                    // A counter variable for use in the loop and array indexer

    // DO-WHILE LOOP:  Go through the code between the curly braces at least once first. 
    // Notice that I initialized the variable 'counter' to zero above. Since array elements 
    // begin getting counted at element zero (which is the first element), this works great. 

    // Also notice that I didn't have to set up a separate counting variable initialized to 
    // 1 here. Since this is a do-while loop, the counter for iteration through the array won't 
    // be incremented  until after the code has run once first.  Counter is incremented 
    // at the end of the other instructions in the 'do' part. At which time it will contain 
    // the number 1 when checking the 'while' part of things afterwards, just as we need it 
    // to be. 

    do {    // BEGIN DO-WHILE

        // Use Math.round on each of the floatArray[] elements and apply the result 
        // right back into the said element when finished. counter begins at zero on 
        // the first iteration. So when this loop runs the first time, this line looks 
        // like this:
        //
        // floatArray[0] = Math.round(floatArray[0]; 

        floatArray[counter] = Math.round(floatArray[counter]);

        // Add the floatArray[] element to the resultArray[] element which will be used 
        // to print the end result as a one-time write to the HTML page when the 
        // do-while loop is finished going through all the floatArray[] elements, having 
        // rounded them all. 

        resultArray[counter] = floatArray[counter];

        // Increment counter by one

        counter++;

    } while (counter < floatArray.length)   // CHECK CONDITION. IF TRUE, CONTINUE. FALSE, EXIT.

    // Display results to the HTML pages

    resultWriter.innerHTML = resultArray;
    
}

