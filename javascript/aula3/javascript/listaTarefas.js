var tarefas = []

function adicionar(){
    const tarefa = document.getElementById('tarefa').value

    if(tarefa === '') return alert('Digite uma tarefa!')

    tarefas.push(tarefa)
    document.getElementById('tarefa').value = '' 
    document.getElementById('tarefa').focus()
    atualizarLista()
    
}

document.getElementById('tarefa').addEventListener('keydown', (e) => {
    if(e.key == 'Enter'){
        adicionar()
    }
})

function atualizarLista(){
    const ul = document.getElementById('listaTarefas')
    ul.innerHTML = ''

    tarefas.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('item');
        li.innerHTML = `${item} <span class="delete-btn" onclick="removerTarefa(${index})">X</span>`;
        ul.appendChild(li);
    })
}

function removerTarefa(index) {
      tarefas.splice(index, 1);  
      atualizarLista();
}