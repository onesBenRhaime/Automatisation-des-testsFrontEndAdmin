import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Forget from "./components/Forget";
import Dashboard from "./components/Admin/Dashboard";
import AddC from "./components/Admin/AddC";
import AddQ from "./components/Admin/AddQ";
import ListeQ from "./components/Admin/ListeQ";
import Contact from "./components/Admin/Contact";
import Contacts from "./components/Admin/contacts";
import ListeCol from "./components/Admin/ListeCol";
import Home from "./components/Home";
import Profile from "./components/Admin/Profile";
import UploadFile from "./components/collaborateur/UploadFile";

import Register from "./components/Register";
import AuthRoute from "./Utils/AuthRoutes";
import BaseRoute from "./Utils/BaseRoutes";

function App() {
	return (
		<div class="wrapper">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/login"
						element={
							<AuthRoute>
								<Login />
							</AuthRoute>
						}
					/>
					<Route path="/register" element={<Register />} />

					<Route path="/forgetPsw" element={<Forget />} />

					<Route
						path="/dashboard"
						element={
							<BaseRoute>
								<Dashboard />
							</BaseRoute>
						}
					/>
					<Route
						path="/Contacts"
						element={
							<BaseRoute>
								<Contacts />
							</BaseRoute>
						}
					/>
					<Route
						path="/AddCollaborateur"
						element={
							<BaseRoute>
								<AddC />
							</BaseRoute>
						}
					/>
					<Route
						path="/ListeCollaborateur"
						element={
							<BaseRoute>
								<ListeCol />
							</BaseRoute>
						}
					/>
					<Route
						path="/AddQuestion"
						element={
							<BaseRoute>
								<AddQ />
							</BaseRoute>
						}
					/>
					<Route
						path="/ListeQuestion"
						element={
							<BaseRoute>
								<ListeQ />
							</BaseRoute>
						}
					/>
					<Route
						path="/Contact"
						element={
							<BaseRoute>
								<Contact />
							</BaseRoute>
						}
					/>
					<Route
						path="/Profile"
						element={
							<BaseRoute>
								<Profile />
							</BaseRoute>
						}
					/>
					<Route
						path="/uploadFile"
						element={
							<BaseRoute>
								<UploadFile />
							</BaseRoute>
						}
					/>
					<Route
						path="/Profile"
						element={
							<BaseRoute>
								<Profile />
							</BaseRoute>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}
export default App;
