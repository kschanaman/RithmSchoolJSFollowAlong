function main() {

    // GET ELEMENTS FROM HTML PAGE AND SET UP DESIRED VARIABLES FOR MAIN()

    // In this exercise, the HTML page contains a form named 'appForm'. It contains six 
    // separate elements. The first two elements are text inputs, one for each number we desire 
    // the user to enter. They are given the element id of 'FirstNum' and 'SecondNum'. Here, 
    // let us grab those elements and assign their values to variables named 'num1' and 'num2' 
    // for easier use in this program...

    var num1 = parseFloat(document.getElementById('FirstNum').value);
    var num2 = parseFloat(document.getElementById('SecondNum').value);

    // Next, the form named 'appForm' has a group of radio buttons. The name of the group is 
    // 'SelectOps' and within that group, there are four total values of which only one can 
    // be selected at a time:  'add', 'subtract', 'multiply', and 'divide'. Let's grab the 
    // whole group and assign it to a new variable here called 'radios' to make things easier 
    // in this program... 

    var radios = document.appForm.SelectOps;

    // As always (as in the previous tutorials and exercises in this series), the HTML page 
    // also has a paragraph element with the id of 'p1'. Let's assign that to a new variable 
    // labeled 'out' to make things easier in this program... 

    var out = document.getElementById('p1');

    // We now must iterate through all of the elements in 'radios', based on how many there are.
    // From the above comments, we know there will be four elements to be found in radios: 
    //
    // add, subtract, multiply, divide
    //
    // The 'for' loop will iterate until it finds the one that is checked first... 

    for (var i=0; i < radios.length; i++) {
        
        // Once the 'for' loop has found the element that is checked... 

        if (radios[i].checked) {

            // Assign the value of that element to a new variable we make here called 
            // 'selectedElement'.  So if it's the 'add' radio button that is checked, then it 
            // will be what is given to the new variable 'selectedElement' here. If it is the 
            // 'subtract' radio button that is checked, then 'subtract' will be given to this 
            // variable.  Etc. 

            var selectedElement = radios[i].value;

            // Finally, we can now call whatever function we need to call based on what is 
            // inside of 'selectedElement'.  If 'selectedElement' contains 'add' then we will 
            // pass num1 and num2 to the function called 'addNums' below this main() function. 
            // If 'subtract', then we call the 'subtractNums' function.  If 'multiply' then 
            // 'multiplyNums' function is called. Or, if 'divide', then 'divideNums' function 
            // is called. 

            // Each function will return the result back to the calling chunk of code here, 
            // and we use it in providing the calculation result back to the user in its 
            // designated output location on the HTML page. 
            
            if (selectedElement === "add") {
                var sum = addNums(num1, num2);
                out.innerHTML = num1 + " plus " + num2 + " equals " + sum;
            } else if (selectedElement === "subtract") {
                var difference = subtractNums(num1, num2);
                out.innerHTML = num1 + " minus " + num2 + " equals " + difference;
            } else if (selectedElement === "multiply") {
                var product = multiplyNums(num1, num2);
                out.innerHTML = num1 + " times " + num2 + " equals " + product;
            } else if (selectedElement === "divide") {
                var dividend = divideNums(num1, num2);
                out.innerHTML = num1 + " divided by " + num2 + " equals " + dividend;
            } else {
                out.innerHTML = "Sorry but one or more inputs are not numbers. Try again...";
            }

            break;
        }
    }
}

// =============================================================================================
// ========================= CALCULATOR FUNCTIONS ARE PROVIDED BELOW ===========================
// =============================================================================================


function addNums(a, b) {            // FUNCTION addNums:        Add two numbers together

    var result = a+b;
    return result;

}

function subtractNums(a, b) {       // FUNCTION subtractNums:   Subtract a number from another

    var result = a-b;
    return result;

}

function multiplyNums(a, b) {       // FUNCTION multiplyNums:   Multiply two numbers together

    var result = a*b;
    return result;

}

function divideNums(a, b) {         // FUNCTION divideNums:     Divide a number into another

    var result = a/b;
    return result;

}

// WE NOW HAVE A FULLY FUNCTIONAL, BASIC CALCULATOR. 
// Of course, this isn't much fun when one can use the calculator on a cell phone that 
// comes as 'standard issue' these days. But hey, wasn't writing our own program to do it 
// fun anyway? lol
