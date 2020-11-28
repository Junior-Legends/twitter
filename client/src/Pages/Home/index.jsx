import React from "react";

// import Main Components
import Header from "../../Components/Header";
import TopTwits from "../../Components/TopTwits";
import SideBar from "../../Components/SideBar";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<TopTwits />
			<SideBar />
		</div>
	);
};

export default Home;
