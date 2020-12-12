import React from "react";
import SideNavbar from "../../Components/SideNavbar";
import LeftSideContent from "../../Components/LeftSideContent";
import {
	big_prof,
	post_image,
	usersInfo as dummyUsersInfo,
	usersInfo,
} from "../../Constants/Dummies/userData.dummy";
import Twits from "../../Components/Twits";
import SearchBox from "../../Components/searchBox";
import Trends from "../../Components/trends";
import Followers from "../../Components/followers";
import Main from "../../Components/Main";
import "./Profile.scss";

const Profile = () => {
	let user = usersInfo[0];
	return (
		<div className="profile">
			<SideNavbar />

			<Main title="پروفایل">
				<div className="profile_user">
					<div>
						<img
							className="profile_user_background-image"
							src={post_image}
							alt="post_image"
						/>

						<div className="profile_user_full-profile">
							<div className="profile_user_full-profile-right">
								<img
									className="profile_user_full-profile_profile-pic"
									src={big_prof}
									alt="aks"
								/>
								<div className="profile_user_full-profile_profile-desc">
									<div className="profile_user_full-profile_profile-desc_name">
										<p>{user.name}</p>
										{user.verified ? <i className="icon-Verified"></i> : null}
									</div>
									<p className="profile_user_full-profile_profile-desc_username">
										{user.username}
									</p>
								</div>
							</div>

							<div className="profile_user_full-profile-left">
								<button className="profile_user_full-profile_edit-profile-btn">
									ویراش پروفایل
								</button>
								<div className="profile_user_full-profile_followers-info">
									<p className="profile_user_full-profile_followers-info_followers">
										2k دنبال کننده
									</p>
									<p className="profile_user_full-profile_followers-info_following">
										100 دنبال شونده
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Twits usersInfo={dummyUsersInfo} />
			</Main>

			<LeftSideContent>
				<SearchBox />
				<Trends />
				<Followers />
			</LeftSideContent>
		</div>
	);
};

export default Profile;
