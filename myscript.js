var totalBill = document.getElementById('totalBill').value;
var numofPeople = document.getElementById('numPeople').value;
var servQual = document.getElementById('quality').value;

function calculateTip(){
    if (totalBill === "" || servQual == 0) {
        alert("Please enter valid values!!");
        return;
    }
    if (numofPeople === "" || numofPeople <= 1) {
        numofPeople = 1;
    
        document.getElementById('each').style.display = "none";
    }
    else {
        document.getElementById('each').style.display = 'block';
    }

    var total = (totalBill * servQual) / numofPeople;
    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tip').innerHTML = total;
    
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

