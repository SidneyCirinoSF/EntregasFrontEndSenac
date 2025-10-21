var secao = document.getElementById('area')
var secao2 = document.getElementById('area2')
var secao3 = document.getElementById('area3')
var contador = 0
var contador2 = 0

secao.addEventListener("mouseenter", () => {
    if(secao.innerText === 'Interaja...'){
        secao.innerText = 'Clique!'
        secao.style.background = 'pink'
    } else {
        secao.innerText = 'Interaja...'
        secao.style.background = 'greenyellow'
    }   
})

function contar() {
    contador++
    secao2.innerText = contador   
}

secao3.addEventListener("mouseenter", () => {
    contador2++
    secao3.innerText = contador2
})