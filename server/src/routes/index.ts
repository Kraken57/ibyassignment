import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import ChatController from "../controllers/ChatController.js";
import authenticationGuard from "../middleware/AuthenticationGuard.js";
import ChatGroupUserController from "../controllers/ChatGroupUserContoller.js";
import TalkController from "../controllers/TalkController.js";

const router = Router();


// Authentication routes
router.post("/auth/login", AuthController.login);

// chat group routes
router.get("/chat-group", authenticationGuard, ChatController.create);
router.get("/chat-group/:id", ChatController.show);
router.post("/chat-group", authenticationGuard, ChatController.store);
router.put("/chat-group/:id", authenticationGuard, ChatController.update);
router.delete("/chat-group/:id", authenticationGuard, ChatController.delete);

// * Chat group user
router.get("/chat-group-user", ChatGroupUserController.create);
router.post("/chat-group-user", ChatGroupUserController.store);

// * for chat messages
router.get("/chats/:groupId", TalkController.create);
export default router;