import { Request, Response } from "express";
import { createTaskBusiness } from "../../business/task/createTaskBusiness";

export const createTask = async (
   req: Request,
   res: Response
) => {
   try {

      const { title, description, deadline, authorId } = req.body

      await createTaskBusiness({
         title, description, deadline, authorId
      })

      res.status(201).end()

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}