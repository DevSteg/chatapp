import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import { getUserRequest } from "../../api/getUserRequest";
import ProfileForm from "../../components/profileForm/ProfileForm";
import "./_profile.scss";

const Profile = () => {
	const [userData, setUserData] = useState({
		username: "",
		firstName: "",
		secondName: "",
		email: "",
	});

	const { token } = useContext(AuthContext); // Get token using context hook

	// call getUserRequest (GET) for the user info using token
	useEffect(() => {
		getUserRequest(token).then((user) => {
			setUserData(user); // set userData with req response
		});
	}, [token]);

	// Update the state (userData) with user input
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};
	return (
		<section className="profile-section">
			{!token && <Navigate to="/login" />}
			<h3 className="greeting">Welcome {userData.username}</h3>
			<ProfileForm userData={userData} handleOnChange={handleOnChange} />
		</section>
	);
};

export default Profile;
