import React from "react";
import "./TopTwits.scss";
import amirly from "../../Assets/images/amirly.png";
import Twitts from "../Twitts";
import topTwits from "./topTwits.example";

const TopTwits = () => {
	return (
		<>
			<main className="top_twits_main_wrapper">
				<section className="top_twits_header">
					<h3>خانه</h3>
				</section>
				<section className="top_twits_user_wrapper">
					<div className="top_twits_user">
						<div className="top_twits_user_top_elements">
							<img
								className="top_twits_user_profile_image"
								src={amirly}
								alt="aks"
							/>
							<input
								className="top_twits_user_interjection_input"
								type="text"
								name="twit"
								placeholder="چه اتفاقی افتاده است؟"
							/>
						</div>
						<div className="top_twits_user_bottom_elements">
							<i className="icon-Image"></i>
							<button>توییت</button>
						</div>
					</div>
				</section>

				<Twitts userInfo={topTwits} />
			</main>
		</>
	);
};

export default TopTwits;
