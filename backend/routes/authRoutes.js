import express from "express";
import auth from "../controllers/authControllers.js";
import { encode } from "../middleware/token.js";

const router = express.Router();

router.post("/login", encode, auth.loginUser);

export default router;
