// Make sure all Document Object Model (DOM) nodes are loaded and available first...
document.addEventListener("DOMContentLoaded", main, false);



// Keep things tidy within an explicitly-made main() function here... 
function main() {

    var people  = ["Greg", "Mary", "Devon", "James"];       // Initialize array we will use...
    var tempArr = [];                                       // A temp array for when  needed...

    var arrayCounter    = 0;                                // Counter will be used often...

    // I choose to use eleven unique id tags in the HTML document, one for each exercise 
    // and its output. Keeps each nice and separate that way. And since the page is otherwise 
    // static, I want the outputs of all to remain on the page in similar static fashion for 
    // this program. I'm assigning each to separate variables named for ease of use here. 

    var exercise1out    = document.getElementById("p1");
    var exercise2out    = document.getElementById("p2");
    var exercise3out    = document.getElementById("p3");
    var exercise4out    = document.getElementById("p4");
    var exercise5out    = document.getElementById("p5");
    var exercise6out    = document.getElementById("p6");
    var exercise7out    = document.getElementById("p7");
    var exercise8out    = document.getElementById("p8");
    var exercise9out    = document.getElementById("p9");
    var exercise10out   = document.getElementById("p10");
    var exercise11out   = document.getElementById("p11");




    //==========================================================================================
    // EXERCISE 1: Loop through 'people' array and output where desired
    //==========================================================================================

    // This one is quite simple (well, they all are really, but hey...)  Use a simple 'for' 
    // loop. arrayCounter was initialized to zero above (at the top of the main() function). 
    // Use the 'length' method to get the number of element positions in the array, and use 
    // it in the for loop.

    for (arrayCounter; arrayCounter < people.length; arrayCounter++) {
        tempArr[arrayCounter] = people[arrayCounter];
    }

    // Send it to the HTML page for the visitor to see the end result

    exercise1out.innerHTML = "(Ex. 1 Out:) " + tempArr;   





    //==========================================================================================
    // EXERCISE 2:      Write the command to remove "Greg" from the array. 
    // PERSONAL NOTE:   I opted to use 'shift' since "Greg" is at the front of the array. 
    //==========================================================================================

    people.shift();             //  Remove element from front of array
    arrayCounter = 0;           //  Reset arrayCounter to 0
    tempArr = [];               //  Reset tempArr

    // Do a loop to assign the newly modified elements in 'people' to tempArray

    for (arrayCounter; arrayCounter < people.length; arrayCounter++) {
        tempArr[arrayCounter] = people[arrayCounter];
    }

    // Print it out to the HTML page now...

    exercise2out.innerHTML = "(Ex. 2 Out:) " + tempArr; 





    //==========================================================================================
    // EXERCISE 3:      Write command to remove James" from the array.
    // PERSONAL NOTE:   Since "James" is at the end, will remove using pop()
    //                  Keeping tempArr as it remains from last exercise above so this works...
    //==========================================================================================

    tempArr.pop();      //  POP goes the weasel (hahaha *snarf* *grunt* :D)

    // Print it out to the HTML page for the visitor to see the end result

    exercise3out.innerHTML = "(Ex. 3 Out:) " + tempArr;





    //==========================================================================================
    // EXERCISE 4:      Write command to add "Matt" to the front of the array.
    //==========================================================================================

    tempArr.unshift("Matt");    // Array friends don't let array friends exist shifted!!

    // Print it out to the HTML page for the visitor to see the end result

    exercise4out.innerHTML = "(Ex. 4 Out:) " + tempArr;





    //==========================================================================================
    // EXERCISE 5:      Write command to add my name to the end of the array. 
    // PERSONAL NOTE:   Keeping tempArr as it remains from the previous exercise. The list of 
    //                  exercises play upon the state of an array from the previous exercise. 
    //                  Here, we can use push() to add my name to the end. Splice could be 
    //                  used as well, but push() is convenient as well. 
    //==========================================================================================

    tempArr.push("Kurt");   // Sometimes JavaScript programmers can be a bit 'pushy'. Sorry...

    // Print it out to the HTML page for the visitor to see the end result

    exercise5out.innerHTML = "(EX. 5 Out:) " + tempArr;





    //==========================================================================================
    // EXERCISE 6:      Using a loop, iterate through this array and after printing "Mary", 
    //                  exit from the loop.
    //==========================================================================================

    arrayCounter = 0;       // Reset arrayCounter
    var tempArr2 = [];      // Create a blank array for this one...

    // Use a for loop to iterate through what is within the curly braces... 

    for (arrayCounter; arrayCounter < tempArr.length; arrayCounter++) {

        tempArr2[arrayCounter] = tempArr[arrayCounter]; // Assign each element to tempArr2...

        if (tempArr2[arrayCounter] === "Mary") {        // If element contains "Mary",
            break;                                      // Break out of for loop and...
        }

    }
    // Print the result of this exercise to the appropriate place in the HTML page... 

    exercise6out.innerHTML = "(Ex. 6 Out:) " + tempArr2;





    //==========================================================================================
    // EXERCISE 7:      Write the command to make a copy of the array using 'slice'. The copy 
    //                  should NOT include "Mary" or "Matt".
    //==========================================================================================

    tempArr2 = [];                  // Reset tempArr2 to make it empty again for this exercise
    tempArr2 = tempArr.slice(2,4);  // Assign result of the slice to tempArr2 for later use

    // Send the result of this exercise to the HTML page... 

    exercise7out.innerHTML="(Ex. 7 Out:) " + tempArr2;





    //==========================================================================================
    // EXERCISE 8:      Write the command that gives the indexOf where "Mary" is located. 
    // PERSONAL NOTE:   tempArr still has the original copy of the array, while tempArr2 
    //                  doesn't. So here, must use tempArr for the result to be correct 
    //                  according to the exercise requirements.
    //==========================================================================================

    // I'm creating a different variable for this exercise here...

    var elementLocationForMary = tempArr.indexOf("Mary");

    // Send the result of this exercise to the HTML page...

    exercise8out.innerHTML="(Ex. 8 Out: The element index of 'Mary' is: " + elementLocationForMary;





    //==========================================================================================
    // EXERCISE 9:      Write the command that gives the indexOf where "Foo" is located 
    //                  (this should return -1)
    //==========================================================================================

    // I'm creating a different variable for this exercise here...

    var elementLocationForFoo = tempArr.indexOf("Foo");

    // Send the result of this exercise to the HTML page...

    exercise9out.innerHTML="(Ex. 9 Out: The element index of 'Foo' is: " + elementLocationForFoo;





    //==========================================================================================
    // EXERCISE 10:     Redefine the people variable with the value you started with. Using 
    //                  the 'splice' command, remove 'Devon' from the array and add 
    //                  'Elizabeth' and 'Artie'. Your array should look like this when done...
    //
    //                  ["Greg", "Mary", "Elizabeth", "Artie", "James"]
    //==========================================================================================

    // First, redefine array 'people' to its original from the beginning, before it got 
    // mangled with the exercises above. 

    people = ["Greg", "Mary", "Devon", "James"];

    // Remove Devon from the array

    people.splice(2,1);

    // Now add "Elizabeth" and "Artie" where "Devon" once was...

    people.splice(2,0,"Elizabeth", "Artie");

    // Send the result of this exercise to the HTML page...

    exercise10out.innerHTML="(Ex. 10 Out:) " + people;





    //==========================================================================================
    // EXERCISE 11:     Create a new variable called 'withBob' and set it equal to the 
    //                  'people' array concatenated with the string of "Bob"
    //==========================================================================================

    // First create the new variable

    var withBob = ["My friends are: "];     // Let Bob do an introduction...

    // Now concatenate 'people' with a signature from 'Bob', add it to 'withBob' and
    // then assign the whole mess back to 'withBob' for displaying to the HTML page...

    withBob = withBob + (people.concat(" -- Sincerely, Bob"));

    // Give it to the visitor of the HTML page    

    exercise11out.innerHTML="(Ex. 11 Out:) " + withBob;

    



    //=========================================================
    // END OF EXERCISES 1 - 11 : MOVE ON TO LEARNING OBJECTS!
    //=========================================================




}
