document.addEventListener("DOMContentLoaded", main, false); // Wait for all DOM nodes to load...

function main() {

    // Nothing is really done here in this function, except the calling of the 
    // 'returnFirstEvenNumber' function to do the heavy lifting (ugh, heavy lifting!!)
    
    returnFirstEvenNumber();

}


// AND NOW, A FUNCTION THAT WILL TAKE US THROUGH OUR MAIN ATTRACTION...

function returnFirstEvenNumber() {

    // DECLARE VARIABLES 

    var out = document.getElementById("p1");    // Get document element where output will go
    
    var count = 0;              // Set counter variable so it begins at array element 0 etc
    var numbers = [1,3,5,8,9];  // Create our numbers array variable
    var outArr  = 0;            // A variable to hold the resulting even number for output
    
    // Set up the 'for' loop to iterate through 'numbers' array.  
    
    for (count; count < numbers.length; count++) {

        // Now let's start iterating the iterations lol!

        if (numbers[count] % 2 === 0) {     // If one of the iterations is even...
            outArr = numbers[count];        // assign the element contents to outArr element 0...
            break;                          // and break out of the loop, finishing up. 
        }
    }

    // Output the result to the browser page now
    
    out.innerHTML = "The first even number in the array is " + outArr + ". All done!";
}
