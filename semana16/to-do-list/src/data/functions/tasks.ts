import { connection } from "../connection";

// Função do endpoint CRIAR TAREFA
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
  console.log("Console.log da função:", formatedDeadline);
  await connection("ToDoListTask").insert({
    title,
    description,
    limit_date: formatedDeadline,
    creator_user_id: creatorUserId,
  });
};
