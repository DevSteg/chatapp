// Desc: Login Request (POST)
// Param: string - Email
// Param: string - Password
// Returns: string - Token

export const loginRequest = async (loginData) => {
	await fetch("http://localhost:5000/auth/login", {
		method: "POST",
		body: JSON.stringify(loginData),
		headers: {
			"Content-type": "application/json",
		},
	})
		.then((res) => res.json()) // return the json within the response
		.then((data) => {
			if (data.authorization) {
				return localStorage.setItem("auth", data.authorization); // If login successful set Auth token within variable
			}
			if (data.error) {
				return alert(data.error); // If login unsuccessful return the given error
			}
		});
};
