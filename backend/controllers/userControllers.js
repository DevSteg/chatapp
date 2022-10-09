import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import makeValidation from "@withvoid/make-validation";

// Desc: Get User by Id
// Route: Get /user/:id
// Access: Public

const getUserById = asyncHandler(async (req, res) => {
	try {
		const { username, firstName, secondName, email } = await User.findById({
			_id: req.userId,
		});

		res.status(200).json({
			success: true,
			username: username,
			firstName: firstName,
			secondName: secondName,
			email: email,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			error,
		});
	}
});

// Desc: Get all users
// Route: GET /user/
// Access: public

const getAllUsers = asyncHandler(async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json({ success: true, users });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
});

// Desc: Create User
// Route: POST /user/
// Access: Public

const createUser = asyncHandler(async (req, res) => {
	try {
		const validation = makeValidation((types) => ({
			payload: req.body,
			checks: {
				username: { type: types.string },
				firstName: { type: types.string },
				secondName: { type: types.string },
				email: { type: types.string },
			},
		}));
		if (!validation.success) return res.status(400).json(validation);

		const { username, firstName, secondName, email, password } = req.body;

		// Check if the users email already exists and throw error
		const checkUserEmail = await User.findOne({ email });
		if (checkUserEmail) {
			res.status(400);
			throw new Error("Email already exists");
		}

		// Check if the username already exists and throw error
		const checkUsername = await User.findOne({ username });
		if (checkUsername) {
			res.status(400);
			throw new Error("Username already exists");
		}

		// Hash Password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create user
		const user = await User.create({
			username: username,
			firstName: firstName,
			secondName: secondName,
			email: email,
			password: hashedPassword,
		});

		res.status(201).json({
			username: user.username,
			firstName: user.firstName,
			secondName: user.secondName,
			email: user.email,
			password: user.password,
		});
	} catch (error) {
		res.status(401);
		throw new Error(error);
	}
});

// Desc: Update User
// Route: POST /user/:id
// Access: Private

const updateUser = asyncHandler(async (req, res) => {
	try {
		// Find user by id and update
		const updatedUser = await User.findByIdAndUpdate(req.userId, req.body, {
			new: true,
		});
		res.status(200).json({ success: true, updatedUser });
	} catch (error) {
		res.status(400);
		throw new Error("Invalid User Data");
	}
});

// Desc: Delete User
// Route: DELETE /user/:id
// Access: Private

const deleteUser = asyncHandler(async (req, res) => {
	try {
		// Find and delete user by id
		await User.findByIdAndDelete(req.userId);
		res.status(200).json({ Success: true });
	} catch (error) {
		res.status(400).json({ success: false });
		throw new Error("Invalid User Data");
	}
});

export default { getUserById, createUser, getAllUsers, updateUser, deleteUser };
