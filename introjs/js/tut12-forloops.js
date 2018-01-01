// Wait until all elements in the Document Object Model (DOM) are loaded and ready first
document.addEventListener("DOMContentLoaded", main, false);

function main() {       // Main function for the program (will do everything within main)

    // Initialize variables
    var firstNum = document.getElementById("firstNum").value;   // User-entered starting number
    var lastNum  = document.getElementById("lastNum").value;    // User-entered last number
    
    var numsArray = [];     // Array to hold each number from first to last while counting
    var count = firstNum;   // The counter variable set to the first number user entered
    var arrayCount = 0;     // Arrays start at element 0. Put the first number in element [0] etc

    var docOutput= document.getElementById("p1");   // ID of location on page to send output

    // For loop starts at the number the user entered, which is stored in firstNum.
    // count is set to that number so the counting begins at that first number. So if the 
    // user entered the number 100 as the starting number and 110 as the last number, for 
    // example, the for loop will look like this in memory: 
    //
    // for (100; 100 <= 110; 100++)

    for (count; count <= lastNum; count++) {
        
        // Fill the numsArray. Each number goes in sequence as an array element here. 
        // Notice at the top of the program where I initialized the arrayCount to zero. 
        // This is because we want the first number to be placed in numsArray[0], the 
        // next number in numsArray[1], etc.  Since the arrayCount is at zero this first 
        // time through the loop, and count equals the first number the user entered (100 in
        // this example), the next line looks like this in memory:
        //
        // numsArray[0] = 100;
        
        numsArray[arrayCount] = count;
        arrayCount++;   // Increment arrayCount by 1. 

    }   // Close out the 'for' loop here.

    docOutput.innerHTML = numsArray;    // Send the array as output to HTML page when done.    
        
}   // Close out function main()

