var result = document.getElementById('resultado')

function isAprov(){
    let nota1 = Number(document.getElementById('n1').value)
    let nota2 = Number(document.getElementById('n2').value)
    let media = (nota1 + nota2)/2

    if(media <= 10 && media >= 7){
        result.innerText = 'Aluno APROVADO com média: ' + media
    } else if(media < 7 && media >= 4){
        result.innerText = 'Aluno em RECUPERAÇÃO com média: ' + media
    } else if(media < 4 && media >= 0){
        result.innerText = 'Aluno REPROVADO com média: ' + media
    } else{
        result.innerText = 'Verifique as notas informadas e tente novamente!'
    }
}