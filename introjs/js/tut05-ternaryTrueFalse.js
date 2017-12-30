/*  ===========================================================================================
    PROGRAM NAME:   tut05-ternaryTrueFalse.js       
    ENTERED BY:     Kurt D. Schanaman, Gering Nebraska USA      DATE ENTERED:   12/28/2017
        
    INSPIRED BY:    Rithm School's Online Javascript Course
    URL: https://www.rithmschool.com/courses/javascript/introduction-to-javascript-intro
    ======================================================================================== */

// This first line is necessary to force the script to wait until the page is loaded completely 
// first. It loads the main() function once finished loading. A script cannot get page element 
// id's until all of them have been loaded first. So, when placing a script into the header 
// of an HTML page, the script runs BEFORE the elements are all loaded. And thus, won't work. 

window.onload = function main() {

    // First declare two variables: firstNum and secondNum. Parse user input from the 
    // prompt() function in each with parseInt so it is converted into an integer number. 
    // All of this can be accomplished on each line as follows (note: don't forget, when 
    // you do this, you need a matching closing parenthesis at the end for every opening 
    // parenthesis you used. here, there are two up front. One right after parseInt and one 
    // right after prompt.  So at the end, you need two closing parenthesis as well. 

    var firstNum = parseInt(prompt("Please enter the first number to compare (firstNum): "));
    var secondNum = parseInt(prompt("Please enter the second number to compare (secondNum): "));
    
    // Added this alert, just so the user gets feedback on the fact that the program is 
    // performing an operation on the numbers that were entered. 

    alert("Checking to see if " + firstNum + " is less than " + secondNum + "...");

    // In the accompanying HTML file in which this script file is being used, I gave a 
    // paragraph element an identifier of 'p1' where I would like the output of this program 
    // to be displayed. 
    //
    // As such, we need to use document.getElementById along with that identifier so it can 
    // be written to. I like to store the result in a separate variable to make things easier 
    // to work with just below it. Here, I assign the result of document.getElementById("p1" 
    // to variable 'pId'

    var pId = document.getElementById("p1");

    // Now we use JavaScript's 'ternary operator' to test a condition, and to then respond 
    // based on whether true or false. Ternary operator is as such...
    //
    //      (testThis) ? (ifTrue, do this) : (ifFalse, do this);
    //
    // Notice, whitespace doesn't hurt anything. It actually helps with readability 
    // to some extent, as you'll see below. I placed the 'true' response on a separate 
    // line down right after the question mark. At the end of that line, I placed the colon. 
    // Then the 'false' line right afterwards (which is executed if the test was false). 

    firstNum < secondNum ?
        pId.innerHTML = "firstNum, " + firstNum + ", is less than secondNum, " + secondNum :
        pId.innerHTML = "firstNum, " + firstNum + ", is greater than secondNum, " + secondNum;

}
