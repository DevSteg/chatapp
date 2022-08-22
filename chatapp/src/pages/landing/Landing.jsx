import "./_landing.scss";
import Button from "react-bootstrap/esm/Button";

const Landing = () => {
	return (
		<section className="landing-section">
			<h1 className="landing-title">
				Welcome to <span>ChatApp</span>
			</h1>
			<div className="cta">
				<div className="login-cta">
					<h5>Please Login to start a Chat!</h5>
					<Button className="login-btn" variant="light" size="lg" href="/login">
						Login
					</Button>
				</div>
				<div className="register-cta">
					<h5>Don't have an account yet? Sign up below!</h5>
					<Button
						className="register-btn"
						variant="light"
						size="lg"
						href="/register"
					>
						Sign Up
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Landing;
