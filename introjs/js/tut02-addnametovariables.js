// This first line is necessary to force the script to wait until the page is loaded completely 
// first. It loads the main() function once finished loading. A script cannot get page element 
// id's until all of them have been loaded first. So, when placing a script into the header 
// of an HTML page, the script runs BEFORE the elements are all loaded. And thus, won't work. 
window.onload = function main() {
 
    var firstName, lastName;    // Initialize variables to hold first and last names
    var userAge;                // Get the user's age

    firstName = prompt("What is your first name, friend?"); // Prompt and assign to firstName
    lastName = prompt("What is your last name, friend?");   // Prompt and assign to lastname

    // Next line is from my own memory. It hasn't been covered in the online tutorial, but 
    // I'm using it here because I wanted to. The JavaScript prompt() feature takes everything 
    // as string input. If one wants to use a number that was input by the user, it must be 
    // converted to a number from a string. In this case, converting from string to an integer. 
    // This is done with parseInt().  I wrapped the prompt() statement within it as a 
    // one-liner.  With it converted to an integer and assigned to its own variable, it can 
    // now be used in some mathematical statements if wanted (such as an age checker to see 
    // if the user is old enough to join us for a drink?)

    userAge = parseInt(prompt("How old are you, friend?"));  // Prompt age and assign to userAge
    var pId = document.getElementById("p1");    // Assign result of getElementById to var pId

    // Now we can use dot notation to output our results to the desired element on the page. 
    // In this case, a paragraph with an id of 'p1' in our HTML page named 
    // tut02-addnametovariables.html
    pId.innerHTML = "Hello " + firstName + " " + lastName + ", it's very nice to meet you!" + 
        " How it must feel to be " + userAge + " years old!";

}   // Close out the whole function now

