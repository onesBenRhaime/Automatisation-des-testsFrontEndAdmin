import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu";
import Header from "../Header";
import { useSelector } from "react-redux";

export default function Dashboard() {
	useSelector((state) => state.session);

	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				{/* Content Wrapper. Contains page content */}
				<div className="content-wrapper">
					{/* Main content */}
					<section className="content">
						<div className=" row">
							<div
								className="col-lg-4 col-6"
								style={{ textAlign: "center", margin: 80 }}
							>
								{/* small box */}
								<div className="small-box-footer bg-light text-dark">
									<Link to="/AddCollaborateur">
										<div className="inner" style={{ padding: 20 }}>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-add-user-web-and-social-media-flatart-icons-outline-flatarticons.png"
														alt=""
													/>
												</i>
											</div>
											<br />
											<p>Ajouter Collaborateur</p>
										</div>
									</Link>
								</div>
							</div>
							{/* ./col */}
							<div
								className="col-lg-4 col-6"
								style={{ textAlign: "center", margin: 80 }}
							>
								{/* small box */}
								<div className="small-box-footer bg-light text-dark">
									<Link to="/AddQuestion">
										<div className="inner" style={{ padding: 20 }}>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/ios-filled/64/000000/question-mark.png"
														alt=""
													/>
												</i>
											</div>
											<br />
											<p>Ajouter Questions</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className=" row">
							<div
								className="col-lg-4 col-6"
								style={{ textAlign: "center", margin: 80 }}
							>
								{/* small box */}
								<div className="small-box-footer bg-light text-dark">
									<Link to="/ListeCollaborateur">
										<div className="inner" style={{ padding: 20 }}>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/dotty/64/000000/connection-to-account.png"
														alt=""
													/>
												</i>
											</div>
											<br />
											<p>Liste Collaborateur</p>
										</div>
									</Link>
								</div>
							</div>
							{/* ./col */}
							<div
								className="col-lg-4 col-6"
								style={{ textAlign: "center", margin: 80 }}
							>
								{/* small box */}
								<div className="small-box-footer bg-light text-dark">
									<Link to="/ListeQuestion">
										<div className="inner" style={{ padding: 20 }}>
											<div className="icon">
												<i>
													<img
														src="https://img.icons8.com/dotty/64/000000/questions.png"
														alt=""
													/>
												</i>
											</div>
											<br />
											<p>Liste Questions</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</section>
					{/* /.content */}
				</div>
			</div>
		</div>
	);
}
