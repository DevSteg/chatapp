import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const RegisterForm = () => {
	return (
		<>
			<Form>
				<Container>
					<Form.Group controlId="Username">
						<Form.Label className="form-label">Username</Form.Label>
						<Form.Control type="text" placeholder="Enter Username" />
					</Form.Group>
					<Form.Group controlId="First Name">
						<Form.Label className="form-label">First Name</Form.Label>
						<Form.Control type="text" placeholder="Enter First Name" />
					</Form.Group>
					<Form.Group controlId="Surname">
						<Form.Label className="form-label">Surname</Form.Label>
						<Form.Control type="text" placeholder="Enter Surname" />
					</Form.Group>
					<Form.Group controlId="Email Address">
						<Form.Label className="form-label">Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter Email" />
						<Form.Text>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Form.Group controlId="Password">
						<Form.Label className="form-label">Password</Form.Label>
						<Form.Control type="password" placeholder="Enter Password" />
					</Form.Group>
					<Form.Group controlId="Password2">
						<Form.Label className="form-label">Re-enter Password</Form.Label>
						<Form.Control type="password" placeholder="Re-enter Password" />
					</Form.Group>
					<Button
						variant="light"
						type="submit"
						className="register-submit"
						size="lg"
					>
						Sign Up
					</Button>
				</Container>
			</Form>
			<div className="login-tag">
				<h6>
					Already have an account? Login <a href="/login">here!</a>
				</h6>
			</div>
		</>
	);
};

export default RegisterForm;
