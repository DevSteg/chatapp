// Desc: Update user request with given user input
// Param : {email: string, firstName: string, secondName: string, username: string}
// Returns: Updated user with user inputs - {success: boolean, email: string, firstName: string, secondName: string, username: string}

export const updateUserRequest = async (updateData, token) => {
	await fetch("http://localhost:5000/users/:id", {
		method: "POST",
		body: JSON.stringify(updateData),
		headers: {
			"Content-type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => res.json()) // return the json within the response
		.then(() => {
			if (res.status === 200) {
				return alert("Your profile has been updated"); // If update successful inform the user
			}
			if (res.status === 400) {
				return alert(data.error); // If update unsuccessful return the given error
			}
		});
};
