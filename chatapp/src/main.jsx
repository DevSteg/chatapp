import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/context";
import { UserContextProvider } from "./context/userContext";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthContextProvider>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
