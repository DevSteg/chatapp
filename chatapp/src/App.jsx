import TopNav from "./components/navbar/TopNav";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/_app.scss";

const App = () => {
	return (
		<div className="app">
			<header className="app-header">
				<TopNav />
			</header>
			<main className="app-main">
				<div className="layer"></div>
				<Router>
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</Router>
			</main>
		</div>
	);
};

export default App;
