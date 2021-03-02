const novaTarefa = document.getElementById("tarefa"); // Captura a tarefa para adicionar
const diaDaSemana = document.getElementById("dias-semana"); // Captura o dia da semana selecionado

// Captura div de cada dia da semana aonde a tarefa será incluída
const tarefasDom = document.getElementById("tarefas-dom"); // 
const tarefasSeg = document.getElementById("tarefas-seg"); // 
const tarefasTer = document.getElementById("tarefas-ter"); // 
const tarefasQua = document.getElementById("tarefas-qua"); // 
const tarefasQui = document.getElementById("tarefas-qui"); // 
const tarefasSex = document.getElementById("tarefas-sex"); // 
const tarefasSab = document.getElementById("tarefas-sab"); // 

function criarTarefa() { // Função para criar a tarefa
    switch (diaDaSemana.value) {
        case 'domingo':
            tarefasDom.innerHTML += `<li>${novaTarefa.value}</li>`;
            novaTarefa.value = ""; // Apaga o texto no input após clicar no botão para inserir.
            break;
        case 'segunda':
            tarefasSeg.innerHTML += `<li>${novaTarefa.value}</li>`;
            novaTarefa.value = "";
            break;
        case 'terca':
            tarefasTer.innerHTML += `<li>${novaTarefa.value}</li>`;
            novaTarefa.value = "";
            break;
        case 'quarta':
            tarefasQua.innerHTML += `<li>${novaTarefa.value}</li>`;
            novaTarefa.value = "";
            break;
        case 'quinta':
            tarefasQui.innerHTML += `<li>${novaTarefa.value}</li>`;
            novaTarefa.value = "";
            break;
        case 'sexta':
            tarefasSex.innerHTML += `<li>${novaTarefa.value}</li>`;
            novaTarefa.value = "";
            break;
        case 'sabado':
            tarefasSab.innerHTML += `<li>${novaTarefa.value}</li>`;
            novaTarefa.value = "";
            break;
    }
}

