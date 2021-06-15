import { Request, Response } from "express"
import { loginBusiness } from "../../business/user/loginBusiness"

export const login = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { email, password } = req.body

      const token: string = await loginBusiness(email, password)

      res.send({
         message: "Usuário logado!",
         token
      })

   } catch (error) {
      res.status(400).send(error.message)
   }
}