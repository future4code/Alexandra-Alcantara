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
      task.creator_user_id, 
      date_format(task.limit_date, '%d/%m/%Y') as deadline,
      nickname FROM ToDoListTask as task
    JOIN ToDoListUser as user
    ON creator_user_id = user.id
    WHERE task.id = ${id}
  `);
  return result[0][0];
};
