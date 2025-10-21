
var result = document.getElementById('resultado')

function somar(){
    var num1 = Number(document.getElementById('input1').value)
    var num2 = Number(document.getElementById('input2').value)
    var soma = num1 + num2

    result.innerText = `A soma entre os números ${num1} e ${num2} é: \n` + soma
}

function subtrair(){
    var num1 = Number(document.getElementById('input1').value)
    var num2 = Number(document.getElementById('input2').value)
    var sub = num1 - num2

    result.innerText = `A subtração entre os números ${num1} e ${num2} é: \n` + sub
}

function multiplicar(){
    var num1 = Number(document.getElementById('input1').value)
    var num2 = Number(document.getElementById('input2').value)
    var mult = num1 * num2

    result.innerText = `A multiplicação entre os números ${num1} e ${num2} é: \n` + mult
}

function dividir(){
    var num1 = Number(document.getElementById('input1').value)
    var num2 = Number(document.getElementById('input2').value)
    var divi = num1 / num2

    result.innerText = `A divisão entre os números ${num1} e ${num2} é: \n` + divi
}