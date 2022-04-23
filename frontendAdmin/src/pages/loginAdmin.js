
import React, { Component } from "react";
export default class Header extends Component {
	render() {
		return (
			<div>
				<div class="wrapper">
					<div class="right">
						<img src="logo.png" width="550px" height="200px" alt="" /> <br />
						<div class="Form">
							<h1>Connexion</h1>
							<div class="input-container">
								<i class="fa fa-envelope icon"></i>
								<input
									class="input-field"
									type="text"
									placeholder="Email"
									name="email"
								/>
							</div>
							<div class="input-container">
								<i class="fa fa-key icon"></i>
								<input
									class="input-field"
									type="password"
									placeholder="Password"
									name="psw"
								/>
							</div>
							<button type="submit" class="btn">
								Connexion
							</button>
							<br />
							<br />
							<br />
							<div class="container" style={{ backgroundColor: "#f1f1f1" }}>
								<pre>
									{" "}
									<span class="psw">
										Mot de passe <a href="forget">Oblié?</a>
									</span>
								</pre>
							</div>
						</div>
					</div>
					<div class="left">
						<img
							class="centrage"
							src="admin.png"
							width="100%"
							height="100%"
							alt=""
						/>
					</div>
				</div>
			</div>
		);
	}
}
