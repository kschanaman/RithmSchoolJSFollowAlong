// Set initial array for global access with initial elements filled

var playfulArray = [5, 10, 15, 20];

// Make sure DOM is fully loaded and ready first, then call main()

document.addEventListener('DOMContentLoaded', main, false);

// Should be good to go! Let's roll... 

function main() {

    var newPlayfulArray = playfulArray;
    var arrayWrite = document.getElementById("displayArray");

    // Variable assignments for changing specific array elements

    var elementToChange = document.getElementById("elementNumber").value;   // Pick element
    var changeElementTo = document.getElementById("changeTo").value;        // Change element to

    // Variable assignments for pushing onto, or popping off of, the end
    var pushOnto = document.getElementById("pushTo").value;                 // Add to end
    var popOffOf = document.getElementById("popOff");                       // Remove from end
    
    // Variable assignments for adding and removing to/from the beginning
    
    var addBeginning = document.getElementById("addBeginning").value;       // Add to beginning
    var removeFront = document.getElementById("removeFront");               // Remove beginning

    // Print the actual array to the correct area of the HTML document.
    // This will dynamically change each time user clicks the 
    // "Perform Operation" button after entering changes he/she wants 
    // to make. This line is responsible for the first printing of the 
    // array to the HTML document initially, and also subsequently. 

    arrayWrite.innerHTML = "["+newPlayfulArray+"]";

    // =======================================================================================
    // HERE WE BEGIN APPLYING THE CHANGES THE USER OPTED FOR IN THE FORM FIELDS OF HTML DOC
    //========================================================================================

    newPlayfulArray[elementToChange] = changeElementTo; // Make desired changes to elements

    // If something is in the field 'pushTo' of the form, then push parameter onto end of array
    // (remember, I assigned the form item 'pushTo' to the variable pushOnto for use in this 
    // program)
    if (pushOnto) {                         
        newPlayfulArray.push(pushOnto);
    }


    // If the checkbox 'popOff' is checked, pop off the last element from the array
    // (remember, I assigned the form item 'popOff' to the variable popOffOf for use here 
    // in this program
    if (popOffOf.checked){
        newPlayfulArray.pop();
    }

    // Add the desired parameter to the front of the array using 'unshift'
    if (addBeginning) {
        newPlayfulArray.unshift(addBeginning);
    }


    // Remove the front element from the array using 'shift' if the checkbox is checked
    if (removeFront.checked) {
        newPlayfulArray.shift();
    }

    arrayWrite.innerHTML = "["+newPlayfulArray+"]"; // Reprint/Refresh the displayed array
    
    resetForm();    // Call the resetForm() function to automatically clear values from form 
                    // fields in the HTML document. User will have a clean slate to do more 
                    // operations on the array with no unexpected surprises.

}

function resetForm() {
    
    // Reset the popOff checkbox by removing checkmark
    //document.getElementById("popOff").checked = false;

    // Reset all other form fields
    document.getElementById("changeElementForm").reset();

}

