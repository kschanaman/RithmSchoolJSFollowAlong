document.addEventListener("DOMContentLoaded", main, false);   // Wait until DOM elements all loaded

function main() {

    // Nothing much will go here in main(), as it's only duty here in this exercise is to 
    // call another function we have created to do something. Let's call the function...

    myName();   // Sends program control to the function 'myName()' below...

}

// Now let us create the next function in this file, as the exercise demands. Call it myName()..

function myName() {

    // This is the function where we'll do our actual work this time. First, let's grab our 
    // page element where we want the output to go to on the HTML page. In this case, it is 
    // labeled p1

    var out = document.getElementById("p1");

    // Create the variable containing my name, as the exercise asks...

    var studentFullName = "Kurt Schanaman";

    // Write it out to our HTML page element and call it done... 

    out.innerHTML = "Function 'myName()' now doxxes me *pouts* : " + studentFullName;

}

