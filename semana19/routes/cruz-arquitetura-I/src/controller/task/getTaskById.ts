import { Request, Response } from "express";
import { getTaskByIdBusiness } from "../../business/task/getTaskByIdBusiness";
import {selectTaskById} from "../../data/task/selectTaskById";

export const getTaskById = async (
   req: Request,
   res: Response
) => {
   try {

      const { id } = req.params

      const task = getTaskByIdBusiness(id)

      res.status(200).send(task)

   } catch (error) {
      res.status(400).send(error.message)
   }
}