import React from "react";
import SideNavbar from "../../Components/SideNavbar";
import LeftSideContent from "../../Components/LeftSideContent";
import { usersInfo as dummyUsersInfo } from "../../Constants/Dummies/userData.dummy";
import Twits from "../../Components/Twits";
import SearchBox from "../../Components/searchBox";
import Trends from "../../Components/trends";
import Followers from "../../Components/followers";
import Main from "../../Components/Main";
import "./Profile.scss";

const Profile = () => {
	return (
		<div className="profile-page">
			<SideNavbar />

			<Main title="پروفایل">
				<div className="profile-page_profile"></div>
				<Twits usersInfo={dummyUsersInfo} />
			</Main>

			<LeftSideContent>
				<SearchBox />
				<Trends />
				<Followers />
			</LeftSideContent>
		</div>
	);
};

export default Profile;
