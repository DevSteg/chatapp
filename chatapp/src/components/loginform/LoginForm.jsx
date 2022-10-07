import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { loginRequest } from "../../api/loginRequest";

const LoginForm = () => {
	const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		// Check user has completed input fields
		if (!loginData.email || !loginData.password) {
			alert("Please enter Email Address and Password");
		}
		// call POST request to backend
		const loginSuccess = await loginRequest(loginData);
		if (loginSuccess) {
			console.log("Login Successful");
		}
		location.reload(); // Reload page
	};

	// Update the state with user input
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	return (
		<>
			<Form onSubmit={handleOnSubmit}>
				<Container>
					<Form.Group controlId="email">
						<Form.Label className="form-label">Email Address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Email"
							name="email"
							value={loginData.email}
							onChange={handleOnChange}
							required
						/>
						<Form.Text>We'll never share your email with anyone else</Form.Text>
					</Form.Group>
					<Form.Group controlId="password">
						<Form.Label className="form-label">Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Enter Password"
							name="password"
							value={loginData.password}
							onChange={handleOnChange}
							required
						/>
					</Form.Group>
					<Button
						className="login-submit"
						variant="light"
						type="submit"
						size="lg"
					>
						Login
					</Button>
				</Container>
			</Form>
			<div className="register-tag">
				<h6>
					Don't have an account yet? Sign up <a href="/register">here!</a>
				</h6>
			</div>
		</>
	);
};

export default LoginForm;
