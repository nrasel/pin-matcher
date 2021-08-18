function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const calcNumber = calcInput.value;
        const newNumber = calcNumber + number
        calcInput.value = newNumber;
    }

})

// document.getElementById('verifyPin').addEventListener('click', function()){
//     console.log('verify pin');
// }
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumbers = document.getElementById('type-number').value;
    const sussesMessage=document.getElementById('notify-succes');
    const failError=document.getElementById('notify-faild');
    if (pin == typeNumbers) {
       
        sussesMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        
            failError.style.display = 'block';
            sussesMessage.style.display = 'none';
    }
}