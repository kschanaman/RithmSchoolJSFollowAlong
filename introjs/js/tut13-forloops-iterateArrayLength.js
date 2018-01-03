function main() {

    // Set up general use variables
    var count = 0;

    // Since we are writing to an HTML page, the output cannot be updated for each 
    // iteration through the myFavFoods array below. So, we will have to simulate by 
    // having the for loop write each element to a second array. The goal of this program 
    // is to demonstrate looping through an array with an unknown length anyway.  So 
    // writing to a second array here to record what that loop does is ok.  Lots of 
    // duplication here, but that's perfectly fine with this type of beginner stuff anyway. 

    var outputDisplayArray = [];
    
    // Set up array of favorite food types
    var myFavFoods = ["Mexican", "Greek", "German", "Chinese", "Italian"];
    
    // Set HTML document output variable
    var docOutput = document.getElementById("p1");

    // Iterate through the loop. Use 'count' variable contents as the for loop counter, 
    // and the array elements count as well. 
    for (count; count < myFavFoods.length; count++) {
        outputDisplayArray[count] = myFavFoods[count];
    }

    // Print the contents of outputDisplayArray to the HTML page where indicated
    docOutput.innerHTML = "My favorite foods are " + outputDisplayArray + "<br>As you can see, I have " + 
        outputDisplayArray.length + " favorite food types! Not just two or three!! :D";
}
