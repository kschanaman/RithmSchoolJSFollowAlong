/*  ===========================================================================================
    PROGRAM NAME:   tut04-guessanumber.js       
    ENTERED BY:     Kurt D. Schanaman, Gering Nebraska USA      DATE ENTERED:   12/28/2017
        
    INSPIRED BY:    Rithm School's Online Javascript Course
    URL: https://www.rithmschool.com/courses/javascript/introduction-to-javascript-intro
    ======================================================================================== */

// This first line is necessary to force the script to wait until the page is loaded completely 
// first. It loads the main() function once finished loading. A script cannot get page element 
// id's until all of them have been loaded first. So, when placing a script into the header 
// of an HTML page, the script runs BEFORE the elements are all loaded. And thus, won't work. 

window.onload = function main() {

    // Prepare some variables in which to store the various pieces of data we will be 
    // collecting and organizing.
    
    var secretNumber = 8;   // Set our secret number right here in the program code
    var guess = 0;          // Since variable 'guess' will hold a number, start it off with 0
    var pId = null;         // A variable in which to store what getElementById fetches for us
    var numTries = 1;       // We will count how many tries it took the user to guess the number
                            // Start it out at 1 since one guess is guaranteed.

    // Prompt user for a number, parse it into an integer number (remember, JavaScript's 
    // prompt() feature grabs all data as string data rather than numbers. So any number the 
    // user enters now must be turned into a number in order to be used for comparing and 
    // calculations, or what have you.  Once the user has entered the data and it has been 
    // parsed into an integer with parseInt() as shown below, assign the result to the 
    // variable 'guess' which then holds it for later use.

    guess = parseInt(prompt("Please guess the secret number (hint: it is between 1 and 10: "));
    
    // I am going to use a while loop here, even though I skipped ahead a bit and learned it. 
    // Why not put it into action ahead of time to play with it, I asked myself?  So I chose to 
    // do just that! :D  
    //
    // The while loop is only entered if the number the user entered above wasn't the 
    // secret number, because the while loop is the very next thing the computer sees 
    // if it wasn't a correct guess. Then the while loop reads "while guess is not identical 
    // to the secretNumber, keep telling the user his/her guess is incorrect and expecting 
    // new guesses until he/she enters the secret number correctly. 
    // 
    // Each time the user makes an incorrect guess, the variable 'numTries' gets one added 
    // to it each time. This in effect counts the number of guesses the user has tried, 
    // including the last one when he/she finally guesses it correctly. This is what 
    // is happening with the line 'numTries++' here.  The two plusses after it increase it 
    // and assign the new total back into itself for use on the next go 'round. 

    while (guess !== secretNumber) {
        guess = parseInt(prompt("Incorrect! Please try again: "));
        numTries++;
    }
    
    // Once the user has finally guessed the secret number, we go ahead and tell 
    // document.getElementById to fetch the location in the HTML page where it finds the 
    // ID 'p1' (in this case, it's the ID of one of the paragraphs near the bottom of the HTML 
    // page).  it assigns this to our variable 'pId' for use in the lines following it.

    pId = document.getElementById("p1");

    // Now let us print whatever result is appropriate to the location in the HTML page where 
    // the <p id="p1"></p> is found.  It will be inserted right at that point near the bottom 
    // of the page. 
    //
    // We will base our output on how many tries the user needed to guess the secretNumber. 
    // If the number of tries stored in the variable 'numtries' is three or less (less than or 
    // equal to three, then "Congrats! You guessed it in three tries or less!!" line is printed 
    // to the location in the HTML page. But if the number stored in the variable 
    // numTries is greater than 3, then the output will congratulate the user, but in a sorry 
    // tone that it took more than three tries. Wishing better luck to the user next time. 

    if (numTries <= 3) {
        pId.innerHTML = "Congrats! You guessed it in three tries or less!! The secret number " + 
            "was indeed " + secretNumber + "! Good Job!!<br>";
    } else {     
        pId.innerHTML = "Congrats! You guessed the secret number! It is indeed " + secretNumber + "!" + 
            " But it took you " + numTries + " tries to figure it out. Better luck next time!<br>";    
    } // This brace closes the else portion of the if-else statement
} // This brace closes the main() function, thus ending the program


