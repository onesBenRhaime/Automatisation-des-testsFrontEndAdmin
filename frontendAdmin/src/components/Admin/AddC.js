import React from "react";
import Menu from "../Menu";
import Header from "../Header";

export default function AddC() {
	function Ajouter() {}
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper">
					<section className="content">
						{/* SELECT2 EXAMPLE */}
						<div className="card card-default">
							<div className="card-header">
								<h3 style={{ textAlign: "center" }}>
									Ajouter Un Collaborateur Orange
								</h3>
							</div>

							{/* /.card-header */}
							<div className="card-body">
								<div className="row">
									<div className="col-6">
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
									<div className="col-6">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">Prénom</label>
											<input
												type="text"
												name="prenom"
												className="form-control"
												id="exampleInputEmail1"
											/>
										</div>{" "}
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Telephone</label>
									<input
										type="text"
										name="tel"
										className="form-control"
										id="exampleInputEmail1"
									/>
								</div>{" "}
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">E-mail</label>
									<input
										type="text"
										name="titre"
										className="form-control"
										id="exampleInputEmail1"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Mot de passe</label>
									<input
										type="text"
										name="titre"
										className="form-control"
										id="exampleInputEmail1"
									/>
								</div>
								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input
											className="custom-control-input custom-control-input-danger"
											type="checkbox"
											id="customCheckbox4"
										/>
										<label
											htmlFor="customCheckbox4"
											className="custom-control-label"
										>
											Activer
										</label>
									</div>
								</div>
								<br />
								<br /> <br />
								<br />
								{/* Button  */}
								<div class="d-flex justify-content-center">
									<div className="col-4">
										<button
											type="button"
											class="btn btn-block btn-success btn-lg"
											onClick={Ajouter}
										>
											Ajouter
										</button>
									</div>
									<div className="col-4">
										<button
											type="button"
											class="btn btn-block btn-danger btn-lg"
										>
											Annuler
										</button>
									</div>
								</div>
								<br />
								<br />
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
