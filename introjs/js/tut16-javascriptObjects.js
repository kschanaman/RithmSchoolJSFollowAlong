// wait until all document object model nodes have loaded first before running the script
document.addEventListener("DOMContentLoaded", main, false);

// Keep things nice and tidy by enclosing in an explicit function called main()

function main() {

    // Create easy-to-use variables to write data to the desired HTML page locations

    var scriptOut1  =   document.getElementById("p1");
    var scriptOut2  =   document.getElementById("p2");

    // Initialize other variables here

    var programmerInfo;
    var tab = "&nbsp;&nbsp;&nbsp;&nbsp;";

    // Create the initial object as the exercise asks. Must include keys for first name, 
    // last name, and occupation, with string values associated with each one. Here, I 
    // use my own name and info about my 'day job' which is far from glamorous (*pouts*)

    programmerInfo  =   {
        firstName:  "Kurt",
        lastName:   "Schanaman",
        occupation: "Truck Driver by Day, Computer Nerd by Night!"
    }

    // Output 1:  Send the information to the HTML page where output 1 is.

    scriptOut1.innerHTML=   

        "<strong>HOUSTON! We have an object! Commencing play time...</strong><br>" +
        "------------------------------------------------------------------------<br>" +

        "<br>Programmer First Name: " + tab + 
            programmerInfo.firstName + "<br>" +     // Using dot notation
        "Programmer Last Name: &nbsp;" + tab + 
            programmerInfo["lastName"] + "<br>" +   // Using bracket notation
        "Programmer Occupation: " + tab + 
            programmerInfo.occupation + "<br>"      // Dot notation again

    
    // Now the exercise asks us to add a key to the programmerInfo object for 'hobby'. 
    // Since I enjoy ham radio, I will add that as a value for that key. 
    //
    // At the same time, the exercise asks that the key and value for occupation be 
    // removed. so we will remove it here as well. I will create the output after all 
    // has been accomplished. 

    programmerInfo.hobby = "Ham Radio";
    delete programmerInfo.occupation;



    // And now the output... 

    scriptOut2.innerHTML=  
 
        "<strong>Adding hobby key and value... DONE!<br>" +
        "Deleting occupation key and value... DONE!</strong><br>" + 
        "------------------------------------------------------------------------<br><br>" + 

        " Programmer First Name:" + tab + 
            programmerInfo["firstName"] + "<br>" +  // Using bracket notation
        "Programmer Last Name: " + tab +
            programmerInfo.lastName + "<br>" +      // Using dot notation
        "Programmer Occupation:" + tab + 
            programmerInfo.occupation + ": Remember, we deleted this one!<br>" +
        "Programmer Hobby: " + tab + tab + 
            programmerInfo.hobby + "<br>"           // More dot notation

}
