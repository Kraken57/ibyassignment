import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const router = Router();


// Authentication routes
router.post("auth/login", AuthController.login);



export default router;