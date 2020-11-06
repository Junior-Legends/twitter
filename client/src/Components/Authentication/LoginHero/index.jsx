import React from "react";
import "./LoginHero.scss";
import ThemeSwitchButton from "../../ThemeSwitchButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginHero = () => {
	// Handling form with react-hook-form library !
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => console.log(data);
	// console.log(errors);

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
						type="text"
						name="Email"
						ref={register({
							required: true,
							pattern: /^\S+@\S+$/i,
							max: 300,
							min: 4
						})}
					/>
					<label htmlFor="">رمز عبور</label>
					<input
						type="password"
						// placeholder="password"
						name="password"
						ref={register({
							required: true,
							max: 300,
							min: 6,
							pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,300}/i
							// "Must contain at least one number and
							//one uppercase and lowercase letter, and at least 6 or more characters"
						})}
					/>
					<input
						type="submit"
						value="ورود"
						className="login_hero_form_submit"
					/>
					{errors.Email && <p>ایمیل را درست وارد کنید</p>}
					{errors.password && <p>پسورد را درست وارد کنید لطفا</p>}
					{errors.password && (
						<p>پسورد باید شامل حروف بزرگ و کوچک ، عدد و حداقل 6 کاراکتر باشد</p>
					)}
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
