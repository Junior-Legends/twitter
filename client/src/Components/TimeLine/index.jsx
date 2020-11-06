import React from "react";
import "./TimeLine.scss";
import amirly from "../../Assets/images/amirly.png";
import amin from "../../Assets/images/amin.png";
import hamed from "../../Assets/images/hamed.png";
import twitt_pic from "../../Assets/images/twitt_pic.png";
import Twitts from "./Twitts";

const TimeLine = () => {
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
		<>
			<main className="timeline_main_wrapper">
				<section className="timeline_header">
					<h3>خانه</h3>
				</section>
				<section className="timeline_user">
					<div className="timeline_user_right_elemnets">
						<img
							className="timeline_user_profile_image"
							src={amirly}
							alt="aks"
						/>
						<p>چه اتفاقی افتاده است؟</p>
					</div>
					<div className="timeline_user_left_elemnets">
						<i className="icon-Image"></i>
						<button>توییت</button>
					</div>
				</section>
				<div className="timeline_twitts">
					<Twitts userInfo={userInfo} />
				</div>
			</main>
		</>
	);
};

export default TimeLine;
