// EXERCISE 1 

var sum = 0;
var n = 0;
while ( sum < 10000) {
    n++;
    sum = sum + n;   
}
console.log(n, sum);

var inputNumber = document.getElementById("inputNumber");
inputNumber.value = "Số nguyên dương nhỏ nhất là:" + " " + n;


// EXERCISE 2

function countSum() {
    var numberX = document.getElementById("numberOne").value;
    var numberN = document.getElementById("numberTwo").value;
    var power = 1;
    var sumPower = 0;
    for (i = 1; i <= numberN; i++ ) {
        power = power * numberX;
        sumPower = sumPower + power;
    }
    console.log("Tổng lũy thừa:", sumPower);

    var resultSum = document.getElementById("result");
    resultSum.value = sumPower;
}


// EXERCISE 3

function countPower() {
    var numberP = document.getElementById("numberPower").value;
    var powerNumber = 1;
     for ( i = 1; i <= numberP; i++ ) {
        powerNumber = powerNumber * i;
     }

    console.log(powerNumber);

    var resultPower = document.getElementById("resultPower");
    resultPower.value = powerNumber;
}

// EXERCISE 4

function createNewdiv () {

    for (i = 1; i <= 10; i++ ) {
        var pDiv = document.createElement("div");

        if ( i % 2 === 0) {
            pDiv.innerText = "Div chẵn:" + i;
            pDiv.className = "red";
        } else {
            pDiv.innerText = "Div lẻ:" + i;
            pDiv.className = "blue";
        }
        createDiv.appendChild(pDiv);
    }
}

