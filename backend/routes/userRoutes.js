import express from "express";
import user from "../controllers/userControllers.js";

const router = express.Router();

router
	.get("/:id", user.getUserById)
	.get("/", user.getAllUsers)
	.post("/", user.createUser)
	.post("/:id", user.updateUser)
	.delete("/:id", user.deleteUser);

export default router;
