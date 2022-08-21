import LoginForm from "../../components/loginform/LoginForm";
import "./_login.scss";

const Login = () => {
	return (
		<section className="login-page">
			<h1 className="login-title">Login</h1>
			<div className="login-form">
				<LoginForm />
			</div>
		</section>
	);
};

export default Login;
