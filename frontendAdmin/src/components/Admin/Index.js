/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));
export default class Index extends Component {
	render() {
		return (
			<div>
				<Container
					style={{
						backgroundColor: "transparent",
						borderRadius: "10px",
						marginTop: "100px",
						padding: "0px 20px 20px 20px",
					}}
					component="main"
					maxWidth="xs"
				>
					<CssBaseline />
					<div id="center">
						<div>
							<div id="padd">
								<form >
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										id="email"
										label="Email "
										name="email"
										autoComplete="email"
										autoFocus
									/>
									<TextField
										variant="outlined"
										margin="normal"
										required
										fullWidth
										name="password"
										label="Mot de passe"
										type="password"
										id="password"
										autoComplete="current-password"
									/>

									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
									>
										S'identifier
									</Button>
								</form>
							</div>
						</div>
					</div>
				</Container>
			</div>
		);
	}
}
