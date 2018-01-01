document.addEventListener("DOMContentLoaded", main, false);

// Declare Globals
var firstArrName, firstArrLen, addFirstArrEl, firstArrNameWriter, firstArrWriter, getFirstArrName, addFirstArrEl;
var makeCopy, secondArrNameWriter;
var firstArray = [];
var copyOffirstArray;
var popOff;

// Functions

function main(copyOffirstArray) {

    firstArrName = document.getElementById("getFirstArrName").value;
    firstArrLen  = document.getElementById("firstArrLen");
    addFirstArrEl   = document.getElementById("addFirstArrEl").value;
    makeCopy = document.getElementById("makeCopy");
    popOff = document.getElementById("popOff");

    // Page Writer Utilities
    var firstArrNameWriter = document.getElementById("firstUserArrName");
    var firstArrWriter= document.getElementById("firstArray");
    var firstArrLenWriter = document.getElementById("firstArrLen");
    var secondArrNameWriter = document.getElementById("displaySecondArrInfo");
    
    // Write Name
    if (!firstArrName == "") {
        firstArrNameWriter.innerHTML = firstArrName;
    } 
    resetForm();

    if (!addFirstArrEl == "") {
        firstArray.push(addFirstArrEl);
        firstArrWriter.innerHTML = firstArray;
    }
    resetForm();

    firstArrLen = firstArray.length;
    firstArrLenWriter.innerHTML = firstArrLen;

    // Make a slice copy of firstArray and place into variable copyOffirstArray
    // Print it so the user knows what it is, that changes will be made to it 
    // with the slice tools rather than firstArray.
    var copyOffirstArray = firstArray.slice();
    secondArrNameWriter.innerHTML = copyOffirstArray;
    
    if (popOff.checked) {
        copyOffirstArray.pop();
    }
    secondArrNameWriter.innerHTML = copyOffirstArray;
}

function firstArrayOps() {





} 


function resetForm() {

    document.getElementById("nameFirstArr").reset();

}
