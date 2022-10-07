import LoginForm from "../../components/loginform/LoginForm";
import "./_login.scss";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const Login = () => {
	const { token } = useContext(AuthContext);
	return (
		<section className="login-page">
			{token && <Navigate to="/profile" />}
			<h1 className="login-title">Login</h1>
			<div className="login-form">
				<LoginForm />
			</div>
		</section>
	);
};

export default Login;
