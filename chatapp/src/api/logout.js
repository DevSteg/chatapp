// Desc: Logout Function
// Returns: removal of auth token from the local storage and reloads the site

export const logout = () => {
	localStorage.removeItem("auth");
	location.reload();
};
