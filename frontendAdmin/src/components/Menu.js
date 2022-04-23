import React from "react";
import logo from "./Admin/img/logoAdmin.PNG";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Menu() {
	const session = useSelector((state) => state.session);
	const { user } = session.user;
	console.log(user);
	return (
		<div>
			<aside
				className="main-sidebar sidebar-dark-primary elevation-4"
				style={{ backgroundColor: "#000000" }}
			>
				{/* Brand Logo */}
				<p className="brand-link">
					<img src={logo} height="80px" width="180px" alt="img" />
				</p>
				{/* Sidebar */}
				<div className="sidebar">
					{/* Sidebar user panel (optional) */}
					<div className="user-panel mt-3 pb-3 mb-3 d-flex">
						<img
							src="https://img.icons8.com/color/506/000000/admin-settings-male.png"
							alt="admin"
						/>
						<div className="info">
							<Link to="/Profile" className="d-block"></Link>
						</div>
					</div>
					{/* Sidebar Menu */}
					<nav className="mt-2">
						<ul
							className="nav nav-pills nav-sidebar flex-column"
							data-widget="treeview"
							role="menu"
							data-accordion="false"
						>
							<li className="nav-item menu-open">
								<Link to="/" className="nav-link ">
									<i className=" nav-icon fas fa-university" />
									<p>Acceuil</p>
								</Link>
							</li>
							<li className="nav-item menu-open">
								<a href="index" className="nav-link">
									<i className=" nav-icon fas fa-user" />
									<p>Profile</p>
								</a>
							</li>
							<li className="nav-item has-treeview menu-open">
								<div
									className="nav-link active"
									style={{ backgroundColor: "#E67E22" }}
								>
									<i className="nav-icon fas fa-users" />
									<p>
										Gérer Collaborateur
										<i className="right fas fa-angle-left" />
									</p>
								</div>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<Link to="/AddCollaborateur" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Ajouter </p>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/ListeCollaborateur" className="nav-link ">
											<i className="far fa-circle nav-icon" />
											<p>Lister</p>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item has-treeview">
								<a
									href="index"
									className="nav-link active"
									style={{ backgroundColor: "#E67E22" }}
								>
									<i className="nav-icon fas fa-edit" />
									<p>
										Gérer Questions
										<i className="right fas fa-angle-left" />
									</p>
								</a>
								<ul className="nav nav-treeview">
									<li className="nav-item">
										<Link to="/ListeQuestion" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Lister</p>
										</Link>
									</li>
									<li className="nav-item">
										<Link to="/AddQuestion" className="nav-link">
											<i className="far fa-circle nav-icon" />
											<p>Ajouter</p>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
					{/* /.sidebar-menu */}
				</div>
				{/* /.sidebar */}
			</aside>
		</div>
	);
}
