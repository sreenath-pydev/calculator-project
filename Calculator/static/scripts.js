// Input Displaying
function btnClick(val) {
    document.getElementById("screen").value+=val;
}
// Two digits 
function TwoDigit(valOne,valTwo){
    var TwoZero = document.getElementById("screen").value;
    document.getElementById("screen").value = TwoZero + valOne + valTwo;
}
//delete last digit
function Delete() {
    document.getElementById("screen").value = document.getElementById("screen").value.slice(0, -1);
}

//clear screen
function ClearScreen() {
    document.getElementById("screen").value = "";
}
//calculate
function Calculate(){
    try {
        var Input = document.getElementById("screen").value
        var Result = eval(Input)
        document.getElementById("screen").value=Result
    } catch{
        alert("Invalid Input")
        document.getElementById("screen").value = "";
    }
}
