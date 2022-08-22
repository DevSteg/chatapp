import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const LoginForm = () => {
	return (
		<>
			<Form>
				<Container>
					<Form.Group controlId="login-form">
						<Form.Label className="form-label">Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter Email" />
						<Form.Text>We'll never share your email with anyone else</Form.Text>
					</Form.Group>
					<Form.Group controlId="login-form">
						<Form.Label className="form-label">Password</Form.Label>
						<Form.Control type="password" placeholder="Enter Password" />
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
