import React from "react";
import { useForm } from "react-hook-form";

export default function TestForm() {
	const { register, handleSubmit, setError, errors } = useForm({
		mode: "onSubmit",
	});
	
	const onSubmit = data => console.log(data);
	// console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="First name"
				name="First name"
				ref={register({ required: true, maxLength: 80 })}
			/>
			<input
				type="text"
				placeholder="Last name"
				name="Last name"
				ref={register({ required: true, maxLength: 100 })}
			/>
			<input
				type="email"
				placeholder="Email"
				name="Email"
				ref={register({ required: true, pattern: /^\S+@\S+$/i })}
				//  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			/>

			<label>Number</label>
			<input type="number" name="numberInput" ref={register({ min: 5 })} />

			<input
				type="number"
				placeholder="Mobile number"
				name="Mobile number"
				ref={register({ required: true, max: 15, min: 10, maxLength: 12 })}
			/>

			<input type="submit" />
			{errors.numberInput && <p>اعداد رو بیشتر از 5 انتخاب کنید</p>}
		</form>

	);
}
