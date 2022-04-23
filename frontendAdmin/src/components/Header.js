import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/action/userActions";

export default function Header() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(logout(navigate));
	};

	const session = useSelector((state) => state.session);

	const { authenticated } = session;
	return (
		<div>
			<nav className="main-header navbar navbar-expand navbar-white navbar-light">
				{/* Left navbar links */}
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" data-widget="pushmenu" href="index.html">
							<i className="fas fa-bars" />
						</a>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<Link to="" className="nav-link">
							Acceuil
						</Link>
					</li>
					<li className="nav-item d-none d-sm-inline-block">
						<Link to="/Contact" className="nav-link">
							<p>Contact</p>
						</Link>
					</li>

					{authenticated && (
						<li className="nav-item d-none d-sm-inline-block">
							<Link to="" onClick={() => logoutHandler()} className="nav-link">
								<p>logout</p>
							</Link>
						</li>
					)}
				</ul>
				{/* Right navbar links */}
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						{/* SEARCH FORM */}
						<form className="form-inline ml-3">
							<div className="input-group input-group-sm">
								<input
									className="form-control form-control-navbar"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
								<div className="input-group-append">
									<button className="btn btn-navbar" type="submit">
										<i className="fas fa-search" />
									</button>
								</div>
							</div>
						</form>
					</li>
				</ul>
			</nav>
		</div>
	);
}
