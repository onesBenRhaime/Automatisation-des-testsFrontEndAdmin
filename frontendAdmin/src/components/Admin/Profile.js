import React from "react";
import Menu from "../Menu";
import Header from "../Header";
export default function Profile() {
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper">
					{/* Main content */}
					<section className="content">
						{/* Default box */}
						<div className="card card-solid">
							<div className="card-body pb-0">
								<div className="row">
									<div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
										<div className="card bg-light d-flex flex-fill">
											<div className="card-header text-muted border-bottom-0">
												<h1> Supper Admin</h1>
											</div>
											<div className="card-body pt-0">
												<div className="row">
													<div className="col-7">
														<h2 className="lead">
															<b>Nicole Pearson</b>
														</h2>
														<p className="text-muted text-sm">
															<b>About: </b> Web Designer / UX / Graphic
														</p>
														<ul className="ml-4 mb-0 fa-ul text-muted">
															<li className="small">
																<span className="fa-li">
																	<i className="fas fa-lg fa-building" />
																</span>{" "}
																Address: Demo Street 123, Demo City 04312, NJ
															</li>
															<li className="small">
																<span className="fa-li">
																	<i className="fas fa-lg fa-phone" />
																</span>{" "}
																Phone #: + 800 - 12 12 23 52
															</li>
														</ul>
													</div>
													<div className="col-5 text-center">
														<img
															src="../../dist/img/user2-160x160.jpg"
															alt="user-avatar"
															className="img-circle img-fluid"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* /.card */}
					</section>
					{/* /.content */}
				</div>
			</div>
		</div>
	);
}
