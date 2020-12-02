import React from "react";
import SideNavbar from "../../Components/SideNavbar";
import LeftSideContent from "../../Components/LeftSideContent";
import { usersInfo as dummyUsersInfo } from "../../Constants/Dummies/userData.dummy";
import Twits from "../../Components/Twits";
import Header from "../../Components/Header";

const Profile = () => {
	return (
		<div className="profile">
			<SideNavbar />
			<div>
				<Header title="پروفایل" />
				<Twits usersInfo={dummyUsersInfo} />
			</div>
			<LeftSideContent />
		</div>
	);
};

export default Profile;
