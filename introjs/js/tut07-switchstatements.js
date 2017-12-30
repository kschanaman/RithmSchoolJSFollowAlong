function emotionTracker() {     // This is the function that gets called when clicking button

    // Create a new variable called 'userEmotion' and assign what was entered in the HTML page 
    // field that has the id of 'emotionalState'.  Don't forget to add the .value at the end 
    // as I did, because I found this program won't work if you don't grab the value
    // INSIDE of the field 'emotionalState' which the user entered. 

    var userEmotion = document.getElementById("emotionalState").value;

    userEmotion = userEmotion.toLowerCase();    // Change what the user entered to all lower case
                                                // for easier comparisons
    // This will be used to store the result of the conditional check in the switch 
    // statement below. So much easier than typing pId.innerHTML in front of each line. 
    // You'll see this used below. 

    var result;

    // Grab the element in the HTML page labeled "p1" (it's the last paragraph tag at the 
    // bottom of the page where our output will go).  Assign it to an easy-to-use variable. 
    // in this case, pId.

    var pId = document.getElementById("p1");


    // Now our actual switch statement.  Remember, we grabbed what the user had typed into 
    // the field in the HTML page labeled with an id of 'emotionalState'.  We assigned it 
    // to the variable userEmotion above. And so, then, the switch statement gets this placed 
    // within the parenthesis to test against the conditions within. 

    switch (userEmotion) {
        case "happy":       // case "see if happy was entered by user"
            result = "YeeHaw! Life truly is a bed of roses, isn't it? Indeed!!";
            break;          // MUST HAVE! Otherwise switch will keep checking every line below
        
        case "sad":         // case "see if sad was entered by user"
            result = "Aww, I'm so sorry. Here, have a cookie! It'll all be better in the morning.";
            break;          // Again, MUST HAVE
        
        case "hungry":      // case "see if hungry was entered by user"
            result = "Same here. I think it's about time to go get some steamed octopus!";
            break;          // MUST HAVE
        
        default:            // If user entered none of the above, print next line instead
            result = "Thank you for sharing. Hope your day ends up being a good one.";

    }
    
    pId.innerHTML = result; // Print result to the bottom of the HTML page where p id="p1" is
}
