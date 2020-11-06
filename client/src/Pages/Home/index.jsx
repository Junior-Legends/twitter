import React from "react";

// import Main Components
import Header from "../../Components/Header";
import TimeLine from "../../Components/TimeLine";
import SideBar from "../../Components/SideBar";

const Home = () => {
	return (
		<>
			<div className="home">
				<Header />
				<TimeLine />
				<SideBar />
			</div>
		</>
	);
};

export default Home;
