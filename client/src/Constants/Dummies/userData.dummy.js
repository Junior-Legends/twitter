import aminPic from "../../Assets/images/amin.png";
import hamedPic from "../../Assets/images/hamed.png";
import amirPic from "../../Assets/images/amirly.png";
import twitt_pic from "../../Assets/images/twitt_pic.png";
import post_image from "../../Assets/images/post_image.jpg";
import big_prof from "../../Assets/images/big-prof.png";

const amir = {
	name: "Amir",
	pic: amirPic,
	username: "AmirhBeigi@",
	likes: 200,
	verified: true,
	// logged: true
};
const amin = {
	name: "Amin",
	pic: aminPic,
	username: "amin@",
	like: 150,
	verified: true,
};
const hamed = {
	name: "Hamed",
	pic: hamedPic,
	username: "hamed@",
	like: 350,
	image: twitt_pic,
};
const usersInfo = [amin, hamed, amir];

export { usersInfo, amin, amir, hamed, post_image, big_prof };
