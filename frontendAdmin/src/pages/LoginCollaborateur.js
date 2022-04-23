import React, { Component } from "react";

export default class Login extends Component {
	render() {
		return (
			<div>
				<body
					class="hold-transition login-page"
					style={{ backgroundColor: "#ffffff" }}
				>
					<section className="col-12  align-self-center">
						{/* Default box */}
						<div className="card">
							<div className="card-body row">
								<div className="col-6">
									<div class="d-flex justify-content-center">
										<br />
										<br />
										<div className="Form">
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
											<div
												className="container"
												style={{ backgroundColor: "#f1f1f1" }}
											>
												<pre>
													{
														"                                                             "
													}
													<span className="psw">
														Mot de passe <a href="#">Oblié?</a>
													</span>
												</pre>
											</div>
										</div>
									</div>
								</div>

								<div
									className="col-5 text-center  "
									style={{ backgroundColor: "#E67E22" }}
								></div>
							</div>
						</div>
					</section>

					{/* /.content */}
				</body>
			</div>
		);
	}
}
