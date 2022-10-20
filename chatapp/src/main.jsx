import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import { AuthContextProvider } from "./context/context";
import { UserContextProvider } from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
