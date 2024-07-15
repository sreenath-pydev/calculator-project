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
// Change theme
function Changetheme() {
    var icon = document.getElementById("icon");
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        icon.innerHTML = '<i class="fa-solid fa-moon fa-2xl"></i>';
    }else{
        icon.innerHTML = '<i class="fa-regular fa-sun fa-2xl" style="color: #ffffff"></i>';
    }
}
