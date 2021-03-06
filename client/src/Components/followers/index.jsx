import React from "react";
import { Link } from "react-router-dom";

import "./follow.scss";
import FollowItem from "./followItem";

import { amin, hamed } from "../../Constants/Dummies/userData.dummy";
import UserProfile from "./../Twits/UserProfile/UserProfile";

const Followers = () => {
	return (
		<>
			<div className="follow">
				<div className="follow_header">
					<span className="header_title">چه کسانی دنبالم می کنند</span>
					<Link to="" className="header_show-more">
						نمایش بیشتر
					</Link>
				</div>

				<div className="follow_container">
					{[amin, hamed].map(item => (
						// <FollowItem key={item.username} userInfo={item} />
						<div className="follow_item">
							<UserProfile
								user={{
									pic: item.pic,
									name: item.name,
									username: item.username,
									verified: item.verified
								}}
								style={{ margin: 0 }}
							/>
							<button className="follow_item_follow_button">دنبال کردن</button>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Followers;
