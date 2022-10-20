// Desc: Get All other users
// Returns: All users within the database

export const getAllUsersRequest = async () => {
	let users;
	// GET request for all users
	await fetch("http://localhost:5000/users", {
		method: "GET",
		headers: {
			"Content-type": "application/json",
		},
	})
		.then((res) => {
			return (users = res.json()); // Set users variable to JSON response
		})
		.catch((error) => {
			console.log(error);
		});

	return users;
};
