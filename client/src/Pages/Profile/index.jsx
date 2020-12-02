import React from "react";
import SideNavbar from "../../Components/SideNavbar";
import LeftSideContent from "../../Components/LeftSideContent";
import { usersInfo as dummyUsersInfo } from "../../Constants/Dummies/userData.dummy";
import Twits from "../../Components/Twits";
import Header from "../../Components/Header";
import SearchBox from "../../Components/searchBox";
import Trends from "../../Components/trends";
import Followers from "../../Components/followers";
import MainContent from "../../Components/MainContent";

const Profile = () => {
	return (
		<div className="profile">
			<SideNavbar />

			<MainContent>
				<Header title="پروفایل" />
				<Twits usersInfo={dummyUsersInfo} />
			</MainContent>

			<LeftSideContent>
				<SearchBox />
				<Trends />
				<Followers />
			</LeftSideContent>
		</div>
	);
};

export default Profile;
