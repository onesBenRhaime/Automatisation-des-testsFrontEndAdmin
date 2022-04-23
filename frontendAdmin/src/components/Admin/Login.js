import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const Navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem("user-info")) {
			Navigate("/Dashboard");
		}
	}, [Navigate]);
	async function login() {
		console.warn(email, password);
		let item = { email, password };
		let result = await fetch("http://localhost:3600/api/user/login", {
			method: "POST",
			headers: {
				"Content-Type": " application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(item),
		});
		result = await result.json();
		localStorage.setItem("user-info", JSON.stringify(result));
		Navigate("/Dashboard");
	}
	return (
		<div>
			<h1>Login</h1>
			<div className="col-sm-6 ">
				<input
					type="text"
					placeholder="Email"
					name="email"
					className=" form-control"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<input
					type="password"
					placeholder="password"
					name="email"
					className=" form-control"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<button className="btn btn-primary" onClick={login}>
					Login
				</button>
			</div>
		</div>
	);
}
export default Login;
