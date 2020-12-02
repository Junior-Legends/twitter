import React from "react";

// import Main Components
import SideNavbar from "../../Components/SideNavbar";
import {
	usersInfo as dummyUsersInfo,
	amir,
} from "../../Constants/Dummies/userData.dummy";
import LeftSideContent from "../../Components/LeftSideContent";
import Header from "../../Components/Header";
import Twits from "../../Components/Twits";
import ResizableTextarea from "../../Components/ResizableTextarea";
import SearchBox from "../../Components/searchBox";
import Trends from "../../Components/trends";
import Followers from "../../Components/followers";
import MainContent from "../../Components/MainContent";
import "./Home.scss";

const Home = () => {
	return (
		<div className="home">
			<SideNavbar />
			<MainContent>
				<Header title="خانه" />
				<section className="top_twits_user_wrapper">
					<div className="top_twits_user">
						<div className="top_twits_user_top_elements">
							<img
								className="top_twits_user_profile_image"
								src={amir.pic}
								alt="aks"
							/>
							<ResizableTextarea
								style={{ marginRight: ".5rem" }}
								placeholder="چه اتفاقی افتاده است؟"
							></ResizableTextarea>
						</div>
						<div className="top_twits_user_bottom_elements">
							<i className="icon-Image"></i>
							<button>توییت</button>
						</div>
					</div>
				</section>

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

export default Home;
