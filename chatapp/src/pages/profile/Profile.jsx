import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import ProfileForm from "../../components/profileForm/ProfileForm";
import { updateUserRequest } from "../../api/updateUserRequest";
import { UserContext } from "../../context/userContext";
import "./_profile.scss";

const Profile = () => {
	const { token } = useContext(AuthContext); // Get token using context hook
	const { userData, setUserData } = useContext(UserContext); // Get user from the user context

	// Update the state (userData) with user input
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		updateUserRequest(userData, token);

		location.reload();
	};
	return (
		<section className="profile-section">
			{!token && <Navigate to="/login" />}
			<h3 className="greeting">Welcome {userData.username}</h3>
			<ProfileForm
				userData={userData}
				handleOnChange={handleOnChange}
				handleOnSubmit={handleOnSubmit}
			/>
		</section>
	);
};

export default Profile;
