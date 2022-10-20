import React, { createContext, useState, useEffect, useContext } from "react";
import { getUserRequest } from "../api/getUserRequest";
import { AuthContext } from "./context";

export const UserContext = createContext("");

export const UserContextProvider = ({ children }) => {
	const [userData, setUserData] = useState({
		username: "",
		firstName: "",
		secondName: "",
		email: "",
	});

	const { token } = useContext(AuthContext); // Get current user token using context hook

	// call getUserRequest (GET) for the user info using token
	useEffect(() => {
		getUserRequest(token).then((user) => {
			setUserData(user); // set userData with req response
		});
	}, [token]);

	return (
		<UserContext.Provider value={{ userData, setUserData }}>
			{children}
		</UserContext.Provider>
	);
};

export default { UserContextProvider };
