// 3. Aplicação Node que começa com uma tarefa e recebe outras atualizando a lista:
const tasks = ["Regar as plantas"];
const newTask = process.argv[2];

tasks.push(newTask);
console.log("Tarefa adicionada com sucesso!\n Tarefas: ", tasks);
