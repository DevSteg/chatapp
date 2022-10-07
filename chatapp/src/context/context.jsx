import React, { createContext } from "react";

export const AuthContext = createContext("");

export const AuthContextProvider = ({ children }) => {
	const token = localStorage.getItem("auth");

	return (
		<AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
	);
};

export default { AuthContextProvider };
