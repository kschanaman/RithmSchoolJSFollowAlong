// Let's use a main() function to accept the user name entered in the form field and to then 
// pass it to the sayHello() function...

function main() {

    var userName = document.getElementById("userName").value;   // Grab entered userName...
    sayHello(userName);                                         // Pass to sayHello() function...

}



// AND NOW THE FUNCTION WE WILL USE TO SEE WHO ENTERED A NAME, AND GREET ACCORDINGLY //


function sayHello(name) {

    // Set up the variables intended to be used
    var out      = document.getElementById("p1");               // Label of output element
    
    var theboss  = "Kurt";                                      // My name (change to yours if 
                                                                // you desire)

    // If userName entered in the HTML form is identical to name stored in var theboss...
    if (name === theboss) {
        // Greet the boss and let the program ask if there is something in this for itself...
        out.innerHTML = "Hello there, boss. Glad to see you. Can I have a raise now?";
    // OR ELSE...
    } else {
        // Greet the new friend and offer to do something together...
        out.innerHTML = "Hello there, " + name + ", let's go on a JavaScript adventure together!";
    }
}
