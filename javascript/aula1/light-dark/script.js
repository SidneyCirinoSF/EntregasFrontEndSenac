const botaoAlterar = document.getElementById('trocaTema')

botaoAlterar.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('tema', 'dark')
    } else{
        localStorage.setItem('tema', 'claro')
    }

    window.addEventListener('DOMContentLoaded', () => {
        const temaSalvo = localStorage.getItem('tema')
    })

    if(temaSalvo === 'escuro'){
        document.body.classList.add('dark-mode')
    } else{
        document.body.classList.remove('dark-mode')
    }
})