import TopNav from "./components/navbar/TopNav";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/_app.scss";

const App = () => {
	return (
		<div className="app">
			<header className="app-header">
				<TopNav />
			</header>
			<main className="app-main">
				<Router>
					<Routes>
						<Route path="/login" element={<Login />} />
					</Routes>
				</Router>
			</main>
		</div>
	);
};

export default App;
