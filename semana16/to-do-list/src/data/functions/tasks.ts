import { connection } from "../connection";

// Função do endpoint 4 [CRIAR TAREFA]
function formatDate(date: string) {
  let splitDate = date.split(/\D/);
  return splitDate.reverse().join("-");
}

export const createTask = async (
  title: string,
  description: string,
  deadline: string,
  creatorUserId: string
): Promise<any> => {
  const formatedDeadline = formatDate(deadline);
  await connection("ToDoListTask").insert({
    title,
    description,
    limit_date: formatedDeadline,
    creator_user_id: creatorUserId,
  });
};

// Função do endpoint 5 [BUSCAR TAREFA PELO ID]
export const getTaskById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT 
      task.id, 
      task.title, 
      task.description, 
      task.status, 
      DATE_FORMAT(task.limit_date, '%d/%m/%Y') as deadline,
      task.creator_user_id, 
      nickname FROM ToDoListTask as task
    JOIN ToDoListUser as user
    ON creator_user_id = user.id
    WHERE task.id = ${id}
  `);
  return result[0][0];
};

// Função do endpoint 7 [BUSCAR TAREFAS CRIADAS POR USUÁRIO]
export const getTasksByUser = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT
      task.id,
      task.title,
      task.description,
      DATE_FORMAT(task.limit_date, '%d/%m/%Y') as deadline,
      task.creator_user_id,
      task.status,
      nickname FROM ToDoListTask as task
    JOIN ToDoListUser as user
    ON creator_user_id = user.id
    WHERE task.creator_user_id = ${id}
  `);
  return result[0];
};

// Função do endpoint 9 [ATRIBUIR UM USUÁRIO RESPONSÁVEL A UMA TAREFA]
export const setResponsible = async (
  taskId: string,
  responsibleUserId: string
): Promise<any> => {
  await connection("ToDoListTaskResponsibles").insert({
    task_id: taskId,
    responsible_user_id: responsibleUserId,
  });
};
