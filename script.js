let qtyApple = 0;
function btnAppleP() {
    qtyApple = qtyApple + 1;
    document.getElementById("appleQuantity").value = qtyApple;
    let Price_Apple = document.getElementById("appleQuantity").value *10;
    let Price_Mango = document.getElementById("mangoQuantity").value *15;
    let Price_Cherry = document.getElementById("cherryQuantity").value *7;
    let budget = document.getElementById('money').value;
    console.log(budget);
    let total_price = Price_Apple + Price_Mango + Price_Cherry;
    document.getElementById('totalValue').innerHTML = total_price;
    document.getElementById('balanceValue').innerHTML = budget - total_price;
    if (total_price > budget){
        qtyApple = 0;
        alert('You are exceding your budget limit.');
    }
}
function btnAppleM(){
    qtyApple = qtyApple - 1;
    if (qtyApple < 0){
        qtyApple = qtyApple + 1;
    }
    document.getElementById("appleQuantity").value = qtyApple;
    let Price_Apple = document.getElementById("appleQuantity").value *10;
    let Price_Mango = document.getElementById("mangoQuantity").value *15;
    let Price_Cherry = document.getElementById("cherryQuantity").value *7;
    let budget = document.getElementById('money').value;
    console.log(budget);
    let total_price = Price_Apple + Price_Mango + Price_Cherry;
    document.getElementById('totalValue').innerHTML = total_price;
    document.getElementById('balanceValue').innerHTML = budget - total_price;
}
let qtyMango = 0;
function btnMangoP(){
    qtyMango = qtyMango + 1;
    document.getElementById("mangoQuantity").value = qtyMango;
    let Price_Apple = document.getElementById("appleQuantity").value *10;
    let Price_Mango = document.getElementById("mangoQuantity").value *15;
    let Price_Cherry = document.getElementById("cherryQuantity").value *7;
    let budget = document.getElementById('money').value;
    console.log(budget);
    let total_price = Price_Apple + Price_Mango + Price_Cherry;
    document.getElementById('totalValue').innerHTML = total_price;
    document.getElementById('balanceValue').innerHTML = budget - total_price;
    if (total_price > budget){
        qtyMango = 0;
        alert('You are exceding your budget limit.');
    }
}
function btnMangoM(){
    qtyMango = qtyMango - 1;
    if (qtyMango < 0){
        qtyMango = qtyMango + 1;
    }
    document.getElementById("mangoQuantity").value = qtyMango;
    let Price_Apple = document.getElementById("appleQuantity").value *10;
    let Price_Mango = document.getElementById("mangoQuantity").value *15;
    let Price_Cherry = document.getElementById("cherryQuantity").value *7;
    let budget = document.getElementById('money').value;
    console.log(budget);
    let total_price = Price_Apple + Price_Mango + Price_Cherry;
    document.getElementById('totalValue').innerHTML = total_price;
    document.getElementById('balanceValue').innerHTML = budget - total_price;
}
let qtyCherry = 0;
function btnCherryP(){
    qtyCherry = qtyCherry + 1;
    document.getElementById("cherryQuantity").value = qtyCherry;
    let Price_Apple = document.getElementById("appleQuantity").value *10;
    let Price_Mango = document.getElementById("mangoQuantity").value *15;
    let Price_Cherry = document.getElementById("cherryQuantity").value *7;
    let budget = document.getElementById('money').value;
    console.log(budget);
    let total_price = Price_Apple + Price_Mango + Price_Cherry;
    document.getElementById('totalValue').innerHTML = total_price;
    document.getElementById('balanceValue').innerHTML = budget - total_price;
    if (total_price > budget){
        qtyCherry = 0;
        alert('You are exceding your budget limit.');
    }
}
function btnCherryM(){
    qtyCherry = qtyCherry - 1;
    if (qtyCherry < 0){
        qtyCherry = qtyCherry + 1;
    }
    document.getElementById("cherryQuantity").value = qtyCherry;
    let Price_Apple = document.getElementById("appleQuantity").value *10;
    let Price_Mango = document.getElementById("mangoQuantity").value *15;
    let Price_Cherry = document.getElementById("cherryQuantity").value *7;
    let budget = document.getElementById('money').value;
    console.log(budget);
    let total_price = Price_Apple + Price_Mango + Price_Cherry;
    document.getElementById('totalValue').innerHTML = total_price;
    document.getElementById('balanceValue').innerHTML = budget - total_price;
}
function btnAdd(){
    let Price_Apple = document.getElementById("appleQuantity").value *10;
    let Price_Mango = document.getElementById("mangoQuantity").value *15;
    let Price_Cherry = document.getElementById("cherryQuantity").value *7;
    let total_price = Price_Apple + Price_Mango + Price_Cherry;
    let budget = document.getElementById('money').value;
    document.getElementById('balanceValue').innerHTML = budget - total_price;
}