// Desc: get user request for single user (GET)
// Returns: user data { Email: string, firstName: string, secondName: string, username: string, success: boolean }

export const getUserRequest = async (token) => {
	let user;
	// GET request
	await fetch("http://localhost:5000/users/:id", {
		method: "GET",
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return (user = res.json()); // Set user variable to JSON response
		})
		.catch((error) => {
			console.log(error);
		});

	return user;
};
