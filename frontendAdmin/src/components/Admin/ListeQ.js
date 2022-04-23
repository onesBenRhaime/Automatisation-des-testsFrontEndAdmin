import React from "react";
import Menu from "../Menu";
import Header from "../Header";
export default function ListeQ() {
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
								<h3 style={{ textAlign: "center" }}>Liste des question</h3>
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
												<a href="i" className="btn btn-success">
													<i className="fas fa-eye" />
												</a>
												<a href="i" className="btn btn-warning">
													<i className="nav-icon fas fa-edit" />
												</a>
												<a href="i" className="btn btn-danger">
													<i className="fas fa-trash" />
												</a>
											</td>
										</tr>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
												<a href="i" className="btn btn-success">
													<i className="fas fa-eye" />
												</a>
												<a href="i" className="btn btn-warning">
													<i className="nav-icon fas fa-edit" />
												</a>
												<a href="i" className="btn btn-danger">
													<i className="fas fa-trash" />
												</a>
											</td>
										</tr>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
												<a href="i" className="btn btn-success">
													<i className="fas fa-eye" />
												</a>
												<a href="i" className="btn btn-warning">
													<i className="nav-icon fas fa-edit" />
												</a>
												<a href="i" className="btn btn-danger">
													<i className="fas fa-trash" />
												</a>
											</td>
										</tr>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
												<a href="i" className="btn btn-success">
													<i className="fas fa-eye" />
												</a>
												<a href="i" className="btn btn-warning">
													<i className="nav-icon fas fa-edit" />
												</a>
												<a href="i" className="btn btn-danger">
													<i className="fas fa-trash" />
												</a>
											</td>
										</tr>
										<tr>
											<td>Ben Rhaime </td>
											<td>Ones</td>
											<td>Onesrhaime@gmail.com</td>
											<td> 21866975</td>
											<td>Développeur</td>
											<td class="d-flex justify-content-center">
												<a href="i" className="btn btn-success">
													<i className="fas fa-eye" />
												</a>
												<a href="i" className="btn btn-warning">
													<i className="nav-icon fas fa-edit" />
												</a>
												<a href="i" className="btn btn-danger">
													<i className="fas fa-trash" />
												</a>
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
		</div>
	);
}
