import React from "react";
import "./Twitts.scss";

const index = ({ userInfo }) => {
	let twitts = userInfo.map(item => (
		<section className="twitts_wrapper">
			<div className="twitts_user_wrapper">
				<div className="twitts_user_info">
					<img className="" src={item.pic} alt="aks" />
					<div className="twitts_user_info_p">
						<p>{item.name}</p>
						<p className="twitts_user_userId">{item.userId}</p>
					</div>
					{item.verified ? <i className="icon-Verified"></i> : null}
				</div>
				<p className="twitts_user_time">1 ساعت پیش</p>
			</div>
			<div className="twitts_contents">
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
					از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
					سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
					متنوع با هدف بهبود ابزارهای کاربردی می باشد.
				</p>
				{item.image ? <img src={item.image} alt="aks" /> : null}
			</div>

			<div className="twitts_icons">
				<i className="icon-Like">
					<p>{item.like}</p>
				</i>
				<i className="icon-Retweet">
					<p>100</p>
				</i>
				<i className="icon-Comment">
					<p>100</p>
				</i>
				<i className="icon-Share"></i>
			</div>
		</section>
	));

	return <>{twitts}</>;
};

export default index;
