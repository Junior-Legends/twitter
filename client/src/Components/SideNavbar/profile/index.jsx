import React from "react";
import "./profile.scss";
import Amirly from "../../../Assets/images/amirly.png";

const Profile = () => {
	return (
		<div className="sideNavbar_user-profile">
			<img
				src={Amirly}
				alt=""
				className="sideNavbar_user-profile-avatar_image"
			/>
			<div className="sideNavbar_user-profile_info">
				<span className="sideNavbar_user-profile_info_name">Amirly</span>
				<span className="sideNavbar_user-profile_info_username">
					@AmirhBeigi
				</span>
			</div>
		</div>
	);
};

export default Profile;
