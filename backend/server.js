import http from "http";
import express from "express";
import logger from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";

dotenv.config(); // Config dotenv
connectDB(); // Connect to database

const app = express();
const port = process.env.PORT || "3000";

app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter); // User API route

// catch 404 and forward to error handler
app.use("*", (req, res) => {
	return res.status(404).json({
		success: false,
		message: "API endpoint does not exist",
	});
});

// Create HTTP server
const server = http.createServer(app);
// Listen on specified port
server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
