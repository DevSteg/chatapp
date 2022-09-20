import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import bcrypt from "bcryptjs";

// Desc: Authenticate (Login) User
// Route: POST /auth/login
// Access: Public

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// find user by email
	const user = await User.findOne({ email });
	// Check Password matches user password
	const checkPassword = await bcrypt.compare(password, user.password);

	if (user && checkPassword) {
		res.status(200).json({
			success: true,
			authorization: req.authToken,
		});
	} else {
		res.status(401).json({
			error: "Email or Password is incorrect",
		});
	}
});

export default { loginUser };
