import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { logout } from "../../api/logout";

const ProfileForm = ({ userData, handleOnChange, handleOnSubmit }) => {
	return (
		<>
			<Form className="profile-form" onSubmit={handleOnSubmit}>
				<Container>
					<Form.Group controlId="profile-username">
						<Form.Label className="profile-label">Username</Form.Label>
						<Form.Control
							type="text"
							name="username"
							className="profile-input"
							value={userData.username}
							onChange={handleOnChange}
							required
						/>
					</Form.Group>
					<Form.Group controlId="profile-first-name">
						<Form.Label className="profile-label">First Name</Form.Label>
						<Form.Control
							type="text"
							name="firstName"
							className="profile-input"
							value={userData.firstName}
							onChange={handleOnChange}
						/>
					</Form.Group>
					<Form.Group controlId="profile-surname">
						<Form.Label className="profile-label">Surname</Form.Label>
						<Form.Control
							type="text"
							name="secondName"
							className="profile-input"
							value={userData.secondName}
							onChange={handleOnChange}
						/>
					</Form.Group>
					<Form.Group controlId="profile-email-address">
						<Form.Label className="profile-label">Email Address</Form.Label>
						<Form.Control
							type="email"
							name="email"
							className="profile-input-email"
							value={userData.email}
							onChange={handleOnChange}
							required
						/>
						<Form.Text>
							We'll never share your email with anyone else.
						</Form.Text>
					</Form.Group>
					<Button
						variant="danger"
						type="button"
						className="logout-btn"
						size="sm"
						onClick={logout}
					>
						Logout
					</Button>
					<Button
						variant="light"
						type="submit"
						className="profile-update-btn"
						size="lg"
					>
						Update
					</Button>
				</Container>
			</Form>
		</>
	);
};

export default ProfileForm;
