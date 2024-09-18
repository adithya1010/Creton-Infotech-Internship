// javascript

// clearScreen function

function clearScreen() {
    document.getElementById("result").value="";
}

//Display function

function display(value) {
    document.getElementById("result").value+=value;
}

//Calculate function

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}