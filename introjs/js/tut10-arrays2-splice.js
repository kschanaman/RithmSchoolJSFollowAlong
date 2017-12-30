// Initialize and populate the array we will be using in this tutorial, assign to
// the variable 'tutorialArray'.
var tutorialArray = ["we","can","learn","how","to","splice"];

// Wait until the Document Object Model (DOM) Content is Loaded. When it has finished loading, 
// transfer program flow to the main() function. 
document.addEventListener("DOMContentLoaded", main, false);

function main() {       // Begin program operations here in function main()

    // I always like to keep my variable declarations at the top of a function rather than 
    // use 'duck typing' wherever I can. I suppose it's because when I first started learning 
    // to program, I started with the C programming language. Old habits sure die hard, eh?
    var arrayWriter = document.getElementById("tutorialArray");
    var spliceBeginElement = document.getElementById("spliceBeginElement").value;
    var spliceNumRemoveItems = document.getElementById("spliceNumRemoveItems").value;
    var addItem1 = document.getElementById("addItem1").value;
    var addItem2 = document.getElementById("addItem2").value;
    var addItem3 = document.getElementById("addItem3").value;

    // Begin by printing our array to the HTML page where element id indicates. This 
    // initial print will show what we've initially populated the array with.
    arrayWriter.innerHTML = tutorialArray;

    // ======================================================================================
    // MAKE THE CHANGES THE USER DECIDED UPON IN THE HTML FORM FIELDS AT TIME OF SUBMITTING
    // ======================================================================================

    // First, see if there was anything in the first two fields (spliceBeginElement and 
    // spliceRemoveItems). If so, then perform the removal of the desired items here. 

    if (spliceBeginElement) {
        tutorialArray.splice(spliceBeginElement, spliceNumRemoveItems);
    }

    // Print array to show the result, just in case this was the only operation the user 
    // asked to do, and had no items to add to the array 
    arrayWriter.innerHTML = tutorialArray;    


    // Next, look to see if there are items in any of the 'Add Item' fields. If so, add 
    // them to the location the user set splice() to put them.
    
    if (addItem1 && addItem2 && addItem3) {
        tutorialArray.splice(spliceBeginElement, spliceNumRemoveItems, addItem1, addItem2, addItem3);
    } else if (addItem1 &&addItem2) {
        tutorialArray.splice(spliceBeginElement, spliceNumRemoveItems, addItem1, addItem2);
    } else if (addItem1) {
        tutorialArray.splice(spliceBeginElement, spliceNumRemoveItems, addItem1);
    }


    // Print the array to the HTML element again to update the changes that have been made
    arrayWriter.innerHTML = tutorialArray;
}

function resetForm() {  // Let user reset form fields to prevent any array mod surprises

    document.getElementById("tutorialArrayForm").reset();

}
