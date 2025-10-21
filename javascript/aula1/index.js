var msg = document.getElementById('msg')
var btn = document.getElementById('clique')
var btnMudaCor = document.getElementById('mudaCor')

var paragrafo = document.getElementsByTagName('p')
var corpo = document.querySelector('div')

btn.addEventListener("click", function(){
    msg.innerText = "Você clicou!"
})

btnMudaCor.addEventListener("click", function(){
    const estaBranco = paragrafo[0].style.color === "white"

    for (let i = 0; i < paragrafo.length; i++){
        paragrafo[i].style.color = estaBranco ? "black" : "white"
    }

    document.body.style.backgroundColor = estaBranco ? "white" : "black"
})