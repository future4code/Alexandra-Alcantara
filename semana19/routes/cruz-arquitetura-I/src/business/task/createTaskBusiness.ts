import { insertTask } from "../../data/task/insertTask";
import { taskData } from "../../model/task";
import { generateId } from "../../services/idGenerator";

export const createTaskBusiness = async (
   taskData: taskData
) => {

   if (
      !taskData.title ||
      !taskData.description ||
      !taskData.deadline ||
      !taskData.authorId
   ) {
      throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
   }

   const id: string = generateId()

   await insertTask({
      id,
      ...taskData
   })
}