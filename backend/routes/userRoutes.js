import express from "express";
import user from "../controllers/userControllers.js";
import { decode } from "../middleware/token.js";

const router = express.Router();

router
	.get("/:id", decode, user.getUserById)
	.get("/", user.getAllUsers)
	.post("/", user.createUser)
	.post("/:id", decode, user.updateUser)
	.delete("/:id", decode, user.deleteUser);

export default router;
