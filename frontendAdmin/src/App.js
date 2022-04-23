import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Forget from "./pages/Forget";
import Dashboard from "./components/Admin/Dashboard";
import AddC from "./components/Admin/AddC";
import AddQ from "./components/Admin/AddQ";
import ListeQ from "./components/Admin/ListeQ";
import Contact from "./components/Admin/Contact";
import Contacts from "./pages/contacts";
import ListeCol from "./components/Admin/ListeCol";
import Index from "./components/Admin/Index";
import Profile from "./components/Admin/Profile";
import UploadFile from "./components/collaborateur/UploadFile";
import Log from "./components/Admin/Login.js";
import Register from "./pages/Register";
import AuthRoute from "./Utils/AuthRoutes";
import BaseRoute from "./Utils/BaseRoutes";

function App() {
	return (
		<div class="wrapper">
			<Router>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route
						path="/login"
						element={
							<AuthRoute>
								<Login />
							</AuthRoute>
						}
					/>
					<Route path="/register" element={<Register />} />
					<Route path="/p1" element={<Log />} />
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
