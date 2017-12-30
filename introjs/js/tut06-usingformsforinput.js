function main() {

    ageChecker();
   
}

function ageChecker() {

    var firstName = document.getElementById("FirstName").value;
    var lastName  = document.getElementById("LastName").value;
    var userAge   = document.getElementById("Age").value;

    var fullName  = firstName + ' ' + lastName;

    var pId       = document.getElementById("p1");

    if (userAge >= 50) {
        pId.innerHTML = "Hello, " + fullName + ", it appears  you are over 50 years of age. " +
            "Partying might hurt you. Is your last will and testimony complete??";
    } else if (userAge >= 21 && userAge < 50) {
        pId.innerHTML = "Wonderful, " + fullName + "! You're within the age of partying! " + 
            "Here, have a cold one on me! (*pours you a Bud Light*)";
    } else {
        pId.innerHTML = "I'm so sorry, " + fullName + " but I'm afraid you're just too darn " + 
            "young to drink alcohol. Maybe in the near future, eh?";
    }
    
}

