import React from "react";
import "./profile.scss";
import Amirly from "../../../Assets/images/amirly.png";

const Profile = () => {
	return (
		<div className="header_profile-header">
			<img src={Amirly} alt="" className="profile-header_avatar" />
			<div className="profile-header_info">
				<span className="info_name">Amirly</span>
				<span className="info_user-name">@AmirhBeigi</span>
			</div>
		</div>
	);
};

export default Profile;
