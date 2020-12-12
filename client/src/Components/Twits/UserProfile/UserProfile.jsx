import React from "react";
import "./UserProfile.scss";

const UserProfile = ({ user, fix_style }) => {
	return (
		<div className={`user_profile ${fix_style}`}>
			<img className="" src={user.pic} alt="aks" />
			<div className="user_profile_info">
				<div className="user_profile_info_some">
					<p>{user.name}</p>
					{user.verified ? <i className="icon-Verified"></i> : null}
				</div>
				<p className="user_profile_username">{user.username}</p>
			</div>
		</div>
	);
};

export default UserProfile;
