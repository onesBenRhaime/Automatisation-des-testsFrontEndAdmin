import React, { Component } from "react";
import home from "./Admin/img/6.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
	render() {
		return (
			<div>
				<body
					class="hold-transition login-page"
					style={{
						backgroundImage: `url(${home})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				>
					<div
						class=" d-flex justify-content-center col "
						style={{ marginTop: "700px", marginLeft: 1100 }}
					>
						<div className="col-2">
							<Link to="/loginCollaborateur">
								<div className="form-group">
									<button
										type="button"
										class="btn btn-block btn-success btn-lg"
										style={{ backgroundColor: "#E67E22" }}
									>
										Collaborateur
									</button>
								</div>
							</Link>
						</div>
						<div className="col-2">
							<Link to="/loginAdmin">
								<div className="form-group">
									<button
										type="button"
										class="btn btn-block btn-danger btn-lg"
										style={{ backgroundColor: "#E67E22" }}
									>
										Administrateur
									</button>
								</div>
							</Link>
						</div>
					</div>
				</body>
			</div>
		);
	}
}
