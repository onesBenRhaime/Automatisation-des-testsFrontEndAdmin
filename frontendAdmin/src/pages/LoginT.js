import React, { Component } from "react";
import Admin from "../components/Admin/img/admin.png";

export default class Login extends Component {
	render() {
		return (
			<div>
				<body
					class="hold-transition login-page"
					style={{ backgroundColor: "#000000" }}
				>
					<section
						className="col-11  align-self-center"
						style={{ backgroundColor: "#000000" }}
					>
						{/* Default box */}
						<div className="card">
							<div className="card-body row">
								<div className="col-6">
									{/*
								<div className="col-6">
									<div class="d-flex justify-content-center">
										<br />
										<br />
										<div className="col-5">
											<div className="form-group">
												<label htmlFor="exampleInputEmail1">Nom</label>
												<input
													type="text"
													name="nom"
													className="form-control"
													id="exampleInputEmail1"
												/>
											</div>{" "}
										</div>
										<div className="col-5">
											<div className="form-group">
												<label htmlFor="exampleInputEmail1">Nom</label>
												<input
													type="text"
													name="nom"
													className="form-control"
													id="exampleInputEmail1"
												/>
											</div>{" "}
										</div>
									</div>
								</div>
*/}
									<div
										className="col-5"
										style={{
											margintop: "150%",
											width: "80%",
											padding: "100pt",
										}}
									>
										<h1>Connexion</h1>
										<div className="input-container">
											<i className="fa fa-envelope icon" />
											<input type="text" placeholder="Email" name="email" />
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
								<div className="col-5 text-center d-flex align-items-center justify-content-center">
									<img src={Admin} alt="img" width="100%" height="100%" />
								</div>
							</div>
						</div>
					</section>
					{/* /.content */}
				</body>
			</div>
		);
	}
}
