import jwt from "jsonwebtoken";
import User from "../models/userModels.js";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

// Create JWT using the users id
export const encode = async (req, res, next) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });
		const payload = {
			userId: user._id,
		};
		const authToken = jwt.sign(payload, SECRET_KEY);
		req.authToken = authToken;
		return next();
	} catch (error) {
		res.status(401).json(error);
	}
};

// Decode the JWT within the Authorization header
export const decode = async (req, res, next) => {
	// If no token in header user is not authorized
	if (!req.headers["authorization"]) {
		return res.status(400).json({ message: "No access token provided" });
	}
	const accessToken = req.headers.authorization.split(" ")[1];
	try {
		const decoded = jwt.verify(accessToken, SECRET_KEY);
		req.userId = decoded.userId;
		return next();
	} catch (error) {
		return res.status(401).json(error);
	}
};
