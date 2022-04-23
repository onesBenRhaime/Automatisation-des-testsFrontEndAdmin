import React from "react";
import Menu from "../Menu";
import Header from "../Header";

export default  function UploadFile () {

		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper">
					<section className="content">
						{/* SELECT2 EXAMPLE */}
						<div className="card card-default">
							<div className="card-header">
								<h3 style={{ color: "#0099CC" }}>Session PFE2022</h3>
							</div>
							{/* /.card-header */}
							<div className="card-body">
								<div className="row  justify-content-center">
									<div className="col-lg-4 ">
										<h1>Importer un fichier </h1>
										<br />
										<br />
										<div className="form-group">
											<input type="file" />
											<br />
											<br />
										</div>
										<div className="row">
											<div className="col-4">
												<div className="form-group">
													<button
														className="btn btn"
														type="submit"
														style={{ backgroundColor: "#E67E22" }}
													>
														Importer
													</button>
												</div>
											</div>
											<div className="col-4">
												<div className="form-group">
													<button
														className="btn btn-"
														type="submit"
														style={{ backgroundColor: "#E67E22" }}
													>
														Annuler
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>

};

