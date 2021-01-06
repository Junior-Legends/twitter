import { useState } from "react";
import axios from "axios";

//Road map authentications
//1-axios post
//2-server response?
//3-set true or false user login state
//4-save user state in localStorage
//5-lead user in home page

//https://twitter-jl.herokuapp.com/api/v1/auth/register

const useAuth = data => {
	const [login, setLogin] = useState(false);
	axios
		.post("https://twitter-jl.herokuapp.com/api/v1/auth/register", data)
		.then(res => {
			// console.log(res);
			if (res.status === 200) {
				setLogin(true);
			}
		});

	return login;
};

export default useAuth;
