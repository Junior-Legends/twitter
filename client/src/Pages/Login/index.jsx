import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

import Promo from "../../Components/Promo";
import ThemeSwitchButton from "../../Components/ThemeSwitchButton";
import ValidationErrorMessage from "../../ValidationErrorMessage";
import useLocalStorage from "../../Hooks/UseLocalStorage";
import "./Login.scss";

const Login = () => {
	const { register, handleSubmit, errors } = useForm({
		mode: "onSubmit",
		reValidateMode: "onSubmit"
	});

	const [localValue, setLocalValue] = useLocalStorage("user_auth");
	const [authenticated, setAuthenticated] = useState(false);

	const history = useHistory();

	const instance = axios.create({
		// withCredentials: true,
		baseURL: "https://twitter-jl.herokuapp.com/api/v1/auth"
	});

	const onSubmit = data => {
		// console.log(data);
		if (data.username.includes("@" && ".")) {
			data = {
				email: data.username,
				password: data.password
			};
			instance.post("/login", data).then(res => {
				if (res.status === 200) {
					setAuthenticated(true);
					console.log(data);
					console.log(localValue);
					history.push({
						pathname: "/"
					});
				}
			});
		} else {
			instance.post("/login", data).then(res => {
				if (res.status === 200) {
					setAuthenticated(true);
					console.log(data);
					console.log(localValue);
					history.push({
						pathname: "/"
					});
				}
			});
		}
	};

	const usernameOrEmailValidator = value => {
		const isEmail = value.includes("@");
		if (isEmail) {
			return (
				value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,300}/i) ||
				"ایمیل معتبر نمیباشد"
			);
		}
		return (
			value.match(/.{3,300}/i) || "نام کاربری باید بیشتر از 3 کاراکتر باشد"
		);
	};
	return (
		<>
			<div className="login">
				<Promo />
				<div className="login_hero">
					<div className="login_hero_theme_switch_wrapper">
						<ThemeSwitchButton />
					</div>
					<div className="login_hero_entry_wrapper">
						<h4>ورود به توییتر فارسی</h4>
						<form className="login_hero_form" onSubmit={handleSubmit(onSubmit)}>
							<label htmlFor="">ایمیل یا نام کاربری</label>
							<input
								className="login_hero_form_input"
								spellCheck={false}
								type="text"
								name="username"
								ref={register({
									required: "ایمیل یا نام کاربری الزامی است",
									validate: usernameOrEmailValidator
								})}
							/>
							<label htmlFor="">رمز عبور</label>
							<input
								className="login_hero_form_input"
								spellCheck={false}
								type="password"
								name="password"
								ref={register({
									required: "رمز عبور الزامی است"
								})}
							/>
							<ValidationErrorMessage errors={Object.values(errors)} />

							<input
								type="submit"
								value="ورود"
								className="login_hero_form_submit"
							/>
						</form>
						<div className="login_hero_register">
							<Link to="/register" className="login_hero_register_after">
								هنوز عضو نشدی؟ ثبت نام
							</Link>
							<Link to="">رمز عبور را فراموش کردم</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
