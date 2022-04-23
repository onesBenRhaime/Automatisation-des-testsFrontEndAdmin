import React from "react";
import Menu from "../Menu";
import Header from "../Header";

export default function AddQ() {
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
								<h3 style={{ textAlign: "center" }}>Ajouter une question</h3>
							</div>
							{/* /.card-header */}
							<div className="card-body">
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">Titre du question</label>
									<input
										type="text"
										name="titre"
										className="form-control"
										id="exampleInputEmail1"
										placeholder="Enter le titre du question "
									/>
								</div>
								<div className="row">
									<div className="col-3">
										<div className="form-group">
											<label htmlFor="exampleInputEmail1">Domaine</label>
											<select
												className="form-control select2"
												style={{ width: "100%" }}
											>
												<option selected="selected">Choix </option>
												<option>Développement Web </option>
												<option>Développement Mobile </option>
												<option>Design </option>
											</select>
										</div>{" "}
									</div>
									<div className="col-4">
										<label htmlFor="exampleInputEmail1">Catégories</label>
										<select
											className="form-control select2"
											style={{ width: "100%" }}
										>
											<option selected="selected">Choix</option>
											<option>FrontEnd</option>
											<option>Backend</option>
										</select>
									</div>
									<div className="col-5">
										<label htmlFor="exampleInputEmail1">Niveau</label>
										<select
											className="form-control select2"
											style={{ width: "100%" }}
										>
											<option selected="selected">Choix</option>
											<option>Avancé</option>
											<option>Moyen</option>
											<option>Concept de base </option>
										</select>
									</div>
								</div>
								{/* /.card-body */}
								<div className="form-group">
									<label>Technologies</label>
									<select
										className="form-control select2"
										style={{ width: "100%" }}
									>
										<option selected="selected">Choix</option>
										<option>FrontEnd</option>
										<option>Backend</option>
										<option>Mobile</option>
										<option>Disign</option>
									</select>
								</div>
								<div className="form-group">
									<label>Technologies</label>
									<select
										className="form-control select2"
										style={{ width: "100%" }}
									>
										<option selected="selected">Choix</option>
										<option>FrontEnd</option>
										<option>Backend</option>
										<option>Mobile</option>
										<option>Disign</option>
									</select>
								</div>
								{/* Réponse + Score   */}
								<div className="row">
									<div className="col-lg-6">
										<label>Réponces</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">
													<input type="radio" />
												</span>
											</div>
											<input type="text" className="form-control" />
										</div>
										{/* /input-group */}
									</div>
									<div className="form-group">
										<label htmlFor="exampleInputEmail1">Score</label>
										<div className="input-group-prepend">
											<input type="number" className="form-control" />
											<a href="i" className="btn btn-warning">
												<i className="fas fa-plus" />
											</a>
											<a href="i" className="btn btn-success">
												<i className="fas fa-check" />
											</a>
											<a href="i" className="btn btn-danger">
												<i className="fas fa-trash" />
											</a>
										</div>
									</div>
								</div>{" "}
								<br />
								<br /> <hr />
								<br />
								<br />
								{/* Button  */}
								<div class="d-flex justify-content-center">
									<div className="col-4">
										<button
											type="button"
											class="btn btn-block btn-success btn-lg"
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
