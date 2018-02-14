document.addEventListener("DOMContentLoaded", main, false); // Wait for DOM nodes to load first...

function main() {

    // Nothing done here except call the function for this exercise

    returnFirstHalf();
}



// AND NOW OUR MAIN ATTRACTION. WE'RE REALLY GETTING FUNCTIONAL NOW, AREN'T WE?

function returnFirstHalf() {

    // SET VARIABLES AND ARRAYS FIRST

    var out = document.getElementById("p1");    // Grab our document output element for output

    var numbers     = [1,2,3,4,5,6,7,8,9,10];   // Our 'numbers' array with some goodies in it

    var slicedHalf  = numbers.slice(numbers.length/2);    // Slice It!

    // Output to the expected area on the HTML page... 

    out.innerHTML = "The second half of the numbers in the 'numbers' array is: " + slicedHalf;

}


