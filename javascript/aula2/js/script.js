// function alterar() {
//     return document.body.style.backgroundColor = "black"
// }

document.body.style.backgroundColor = "gray"

var p1 = document.getElementsByTagName('p')[0]
var titulo1 = document.getElementById('titulo')
var secao = document.getElementById('secao')
var p2 = document.getElementsByName('msg')[0]
var p3 = document.getElementsByClassName('teste')[0]
var btnMostrar = document.getElementById('mostrar')
var resultado = document.getElementById('resultado')

// document.write('Esta escrito assim: ' + p1.innerText)

p1.style.background = "magenta"

titulo1.style.background = "pink"

secao.style.width = "500px"
secao.style.marginLeft = "40%"

p2.innerText = 'Estou mudando'
p2.style.background = 'blue'

p3.style.background = 'red'

function mostrarResultado() {
    resultado.style.background = 'white'
    return resultado.innerText = 'Esta escrito assim' + p1.innerText
}