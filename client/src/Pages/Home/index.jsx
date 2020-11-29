import React from "react";

// import Main Components
import SideNavbar from "../../Components/SideNavbar";
import {
	usersInfo as dummyUsersInfo,
	amin,
} from "../../Constants/Dummies/userData.dummy";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";
import Twits from "../../Components/Twits";
import ResizableTextarea from "../../Components/ResizableTextarea";

const Home = () => {
	return (
		<div className="home">
			<SideNavbar />
			<div className="home_top_twits_wrapper">
				<Header title="خانه" />
				<section className="top_twits_user_wrapper">
					<div className="top_twits_user">
						<div className="top_twits_user_top_elements">
							<img
								className="top_twits_user_profile_image"
								src={amin.pic}
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
			</div>
			<SideBar />
		</div>
	);
};

export default Home;
