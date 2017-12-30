/*  ===========================================================================================
    PROGRAM NAME:   tut03-ifelsepizza.js       
    ENTERED BY:     Kurt D. Schanaman, Gering Nebraska USA      DATE ENTERED:   12/28/2017
        
    INSPIRED BY:    Rithm School's Online Javascript Course
    URL: https://www.rithmschool.com/courses/javascript/introduction-to-javascript-intro
    ======================================================================================== */

// This first line is necessary to force the script to wait until the page is loaded completely 
// first. It loads the main() function once finished loading. A script cannot get page element 
// id's until all of them have been loaded first. So, when placing a script into the header 
// of an HTML page, the script runs BEFORE the elements are all loaded. And thus, won't work. 

window.onload = function main() {
    
    // Create a variable to hold the name of the user's favorite food item as entered by user
    // On the same line (can be on separate lines, but I like one-liners if I can), 
    // prompt the user to enter his/her favorite food. Whatever the user enters then gets 
    // assigned to the variable 'container' on the left-hand side of the equal sign

    var favoriteFood = prompt("What's your favorite food?");

    // In the HTML file (tut03-ifelsepizza.html) accompanying this JavaScript file, I wanted 
    // to display the results in an identified paragraph tag in-page. I named that tag 
    // <p id="p1"> and I need to use JavaScript to fetch that location so it can write the 
    // output to it. And so, I create a new variable to hold that location if it finds it. 
    // I call that new variable 'pId' and what happens on the right side of the = sign, gets 
    // assigned to the variable on the left side of it. 

    var pId = document.getElementById("p1");

    // Now we will use an if-else statement to control what gets output to the HTML page. 
    
    // In this first line, we want to see if the user entered pizza OR Pizza when prompted. 
    // We use the === operator which tests for absolute exactness. So, the user will have had 
    // to have entered all-lowercase 'pizza' OR 'Pizza' with the first letter capitalized. 
    // The || between the two tests means 'OR'.  So it reads in English as such: 
    //
    // IF the user-entered value stored in the variable 'favoriteFood' is identical to "pizza" 
    // OR IF the user-entered value stored in the variable 'favoriteFood' is identical to "Pizza"
    // THEN change the inner HTML portion of the located paragraph tag identified as 'p1' to 
    // "Whoah! My favorite food is pizza too!

    if (favoriteFood === "pizza" || favoriteFood === "Pizza") {
        pId.innerHTML="Whoah! My favorite food is pizza too!";
    } else {
        // OR ELSE if the user entered anything other than "pizza" or "Pizza", 
        // THEN change the inner HTML portion of the located paragraph tag identified 
        // as 'p1' to "That's cool. My favorite food is pizza.

        pId.innerHTML="That's cool. My favorite food is pizza.";
    } // This brace closes the else portion of the if-else statement

} // This brace closes the main() function, thus ending our program code
