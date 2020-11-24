import React from "react";
import "./LoginHero.scss";
import ThemeSwitchButton from "../../ThemeSwitchButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ValidationErrorMessage from "../../../ValidationErrorMessage";

const LoginHero = () => {
	const { register, handleSubmit, errors } = useForm({
		mode: "onSubmit",
		reValidateMode: "onSubmit",
	});
	const onSubmit = (data) => console.log(data);
	return (
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
						name="emailOrUsername"
						ref={register({
							required: "ایمیل یا نام کاربری الزامی است",
							//^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$
							validate: (value) => {
								const isEmail = value.includes("@");
								if (isEmail) {
									return (
										value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,300}/i) ||
										"ایمیل معتبر نمیباشد"
									);
								}
								return (
									value.match(/.{3,300}/i) ||
									"نام کاربری باید بیشتر از 3 کاراکتر باشد"
								);
							},
						})}
					/>
					<label htmlFor="">رمز عبور</label>
					{/* <input
					className="login_hero_form_input"
						spellCheck={false}
						type="password"
						name="password"
						ref={register({
							required: true,
							max: 300,
							min: 6,
							pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,300}/i,
							// "Must contain at least one number and
							//one uppercase and lowercase letter, and at least 6 or more characters"
						})}
					/> */}
					<input
						className="login_hero_form_input"
						spellCheck={false}
						type="password"
						name="password"
						ref={register({
							required: "رمز عبور الزامی است",
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
	);
};

export default LoginHero;
