import React from "react";
import Menu from "./Menu";
import Header from "./Header";
export default function ListeC() {
	return (
		<div>
			<Menu />
			<Header />
			<div className="wrapper">
				<div className="content-wrapper">
					<section className="content">
						{/* /.card */}
						<div className="card">
							<div className="card-header">
								<h3 style={{ textAlign: "center" }}>
									Liste des Collaborateur Orange
								</h3>
							</div>

							{/* /.card-header */}
							<div className="card-body">
								<table
									id="listC"
									className="table table-bordered table-striped"
								>
									<thead>
										<tr>
											<th>Nom</th>
											<th>Prénom</th>
											<th>Email</th>
											<th>Télephone</th>
											<th>Poste</th>
											<th>Activer/Désactiver</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
												<a
													href="i"
													className="btn btn-success"
													data-toggle="modal"
													data-target="#modal-compte"
												>
													<i className="fas fa-eye" />
												</a>
												<a
													href="i"
													className="btn btn-danger"
													data-toggle="modal"
													data-target="#modal-supp"
												>
													<i className="fas fa-trash" />
												</a>{" "}
											</td>
										</tr>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
												<a
													href="i"
													className="btn btn-success"
													data-toggle="modal"
													data-target="#modal-compte"
												>
													<i className="fas fa-eye" />
												</a>
												<a
													href="i"
													className="btn btn-danger"
													data-toggle="modal"
													data-target="#modal-supp"
												>
													<i className="fas fa-trash" />
												</a>{" "}
											</td>
										</tr>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
												<a
													href="i"
													className="btn btn-success"
													data-toggle="modal"
													data-target="#modal-compte"
												>
													<i className="fas fa-eye" />
												</a>
												<a
													href="i"
													className="btn btn-danger"
													data-toggle="modal"
													data-target="#modal-supp"
												>
													<i className="fas fa-trash" />
												</a>{" "}
											</td>
										</tr>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
												<a
													href="i"
													className="btn btn-success"
													data-toggle="modal"
													data-target="#modal-compte"
												>
													<i className="fas fa-eye" />
												</a>
												<a
													href="i"
													className="btn btn-danger"
													data-toggle="modal"
													data-target="#modal-supp"
												>
													<i className="fas fa-trash" />
												</a>{" "}
											</td>
										</tr>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
												<a
													href="i"
													className="btn btn-success"
													data-toggle="modal"
													data-target="#modal-compte"
												>
													<i className="fas fa-eye" />
												</a>
												<a
													href="i"
													className="btn btn-danger"
													data-toggle="modal"
													data-target="#modal-supp"
												>
													<i className="fas fa-trash" />
												</a>{" "}
											</td>
										</tr>
									</tbody>
								</table>
								<div className="card-footer">
									<div class="d-flex justify-content-center">
										<ul className="pagination pagination-sm m-0 text-center">
											<li className="page-item">
												<a className="page-link" href="i">
													«
												</a>
											</li>
											<li className="page-item">
												<a
													className="page-link warning"
													href="i"
													style={{ backgroundColor: "#E67E22" }}
												>
													1
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="i">
													2
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="i">
													3
												</a>
											</li>
											<li className="page-item">
												<a className="page-link" href="i">
													»
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* /.card-body */}
						</div>
					</section>
				</div>
			</div>
			{/**Modals */}
			<div className="modal fade" id="modal-supp">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">
								Désactiver une compte Collaborateur
							</h4>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">
							<p class="d-flex justify-content-center">
								<br /> Êtes-vous sûr de vouloir désactiver ce compte ?
							</p>
						</div>
						<div className="modal-footer justify-content-between">
							<button
								type="button"
								className="btn btn-default"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-danger">
								<i className="fas fa-trash" />
							</button>
						</div>
					</div>
					{/* /.modal-content */}
				</div>
				{/* /.modal-dialog */}
			</div>
			{/**Modals */}
			<div className="modal fade" id="modal-compte">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="card-body box-profile">
								<div className="text-center">
									<img
										classname="profile-user-img img-fluid img-circle"
										src="../../dist/img/user4-128x128.jpg"
										alt=""
									/>
								</div>
								<h3 className="profile-username text-center">Ines Khalifa</h3>
								<p className="text-muted text-center">FullStack Développeur</p>
								<ul className="list-group list-group-unbordered mb-3">
									<li className="list-group-item">
										<b>Télephone</b> <p className="float-right">21866975</p>
									</li>

									<li className="list-group-item">
										<b>E-mail</b>
										<p className="float-right">ines@orange.com</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					{/* /.modal-content */}
				</div>
				{/* /.modal-dialog */}
			</div>
		</div>
	);
}
