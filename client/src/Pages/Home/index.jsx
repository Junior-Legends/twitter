import React from "react";

// import Main Components
import SideNavbar from "../../Components/SideNavbar";
import TopTwits from "../../Components/TopTwits";
import SideBar from "../../Components/SideBar";
import Header from "../../Components/Header";

const Home = () => {
	return (
		<div className="home">
			<SideNavbar />
			<div className="home_top_twits_wrapper">
				<Header title="خانه" />
				<TopTwits />
			</div>
			<SideBar />
		</div>
	);
};

export default Home;
