import RegisterForm from "../../components/registerform/RegisterForm";
import "./_register.scss";

const Register = () => {
	return (
		<section className="register-page">
			<h1 className="register-title">Sign Up</h1>
			<div className="register-form">
				<RegisterForm />
			</div>
		</section>
	);
};

export default Register;
