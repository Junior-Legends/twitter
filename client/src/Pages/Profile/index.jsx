import React from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import amin from "../../Assets/images/amin.png";
import hamed from "../../Assets/images/hamed.png";
import twitt_pic from "../../Assets/images/twitt_pic.png";
import Twits from "../../Components/Twits";

const Profile = () => {
	const userInfo = [
		{ name: "Amin", pic: amin, userId: "amin@", like: 150, verified: true },
		{
			name: "Hamed",
			pic: hamed,
			userId: "hamed@",
			like: 350,
			image: twitt_pic,
		},
		{
			name: "Hamed",
			pic: hamed,
			userId: "hamed@",
			like: 350,
			image: twitt_pic,
		},
	];
	return (
		<div className="profile">
			<Header />
			<main className="top_twits_main_wrapper">
				<section className="top_twits_header">
					<h3>خانه</h3>
				</section>
				<section className="top_twits_user">
					<div className="top_twits_user_top_elements">
						{/* <img
							className="top_twits_user_profile_image"
							src={amirly}
							alt="aks"
						/> */}
						<p>چه اتفاقی افتاده است؟</p>
					</div>
					<div className="top_twits_user_bottom_elements">
						<i className="icon-Image"></i>
						<button>توییت</button>
					</div>
				</section>
				<div className="top_twits_twits">
					<Twits userInfo={userInfo} />
				</div>
			</main>
			<SideBar />
		</div>
	);
};

export default Profile;
