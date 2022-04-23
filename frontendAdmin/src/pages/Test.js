import React, { Component } from "react";
import logo from "./logo.png";
import Admin from "../components/Admin/img/admin.png";
export default class Test extends Component {
	render() {
		return (
			<div style={{ boxsizing: "border box" }}>
				{/*
				<div className="wrapper">
					<div className="right">
						<img src={logo} width="550px" height="200px" alt="" /> <br />
						<div className="Form justify-content-center">
							<h1>Connexion</h1>
							<div className="input-container">
								<i className="fa fa-envelope icon" />
								<input
									className="input-field"
									type="text"
									placeholder="Email"
									name="email"
								/>
							</div>
							<div className="input-container">
								<i className="fa fa-key icon" />
								<input
									className="input-field"
									type="password"
									placeholder="Password"
									name="psw"
								/>
							</div>
							<button type="submit" className="btn">
								Connexion
							</button>
							<br />
							<br />
							<br />
						</div>
					</div>
					<div className="left">
						<img
							className="centrage"
							src={Admin}
							width="100%"
							height="100%"
							alt=""
						/>
					</div>
                 </div>*/}

				<div class="row" >
					<div
						class="column"
						style={{
							float: "left",
							width: " 50%",
							padding: "10px",
							height: "300px",
						}}
					>
						<h2>Column 1</h2>
						<p>Some text..</p>
					</div>
					<div class="column" style={{}}>
						<h2>Column 2</h2>
						<p>Some text..</p>
					</div>
				</div>
			</div>
		);
	}
}
