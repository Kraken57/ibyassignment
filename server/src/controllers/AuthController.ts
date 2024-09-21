import { Request, Response } from "express";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";

interface IUserLoginInfo {
  name: string;
  email: string;
  provider: string;
  oauth_id: string;
  image?: string;
}
class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const body: IUserLoginInfo = req.body;
      let findUser = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });

      if (!findUser) {
        findUser = await prisma.user.create({
          data: body,
        });
      }
      let JWTPayload = {
        name: body.name,
        email: body.email,
        id: findUser.id,
      };
      const token = jwt.sign(JWTPayload, process.env.JWT_SECRET, {
        expiresIn: "365d",
      });
      return res.json({
        message: "User logged in successfully",
        user: {
          ...findUser,
          token: `Bearer ${token}`,
        },
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal server error, Please try again later" });
    }
  }
}

export default AuthController;
