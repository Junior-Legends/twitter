import React from "react";
import "./TopTwits.scss";
import amirly from "../../Assets/images/amirly.png";
import Twits from "../Twits";
import topTwits from "./topTwits.example";
import ResizableTextarea from "../ResizableTextarea";

const TopTwits = () => {
	return (
		<>
			<section className="top_twits_user_wrapper">
				<div className="top_twits_user">
					<div className="top_twits_user_top_elements">
						<img
							className="top_twits_user_profile_image"
							src={amirly}
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

			<Twits userInfo={topTwits} />
		</>
	);
};

export default TopTwits;
