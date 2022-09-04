import mongoose from "mongoose";
import { v4 } from "uuid";

const userSchema = new mongoose.Schema(
	{
		_id: {
			type: String,
			default: () => v4().replace(/\-/g, ""),
		},
		firstName: {
			type: String,
			required: [true, "Please Add a first Name"],
		},
		secondName: {
			type: String,
			required: [true, "Please Add a surname"],
		},
		email: {
			type: String,
			required: [true, "Please Add your email Address"],
		},
		password: {
			type: String,
			required: [true, "Please Add a password"],
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", userSchema);
