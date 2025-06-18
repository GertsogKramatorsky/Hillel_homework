import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root() {
	return (
		<>
			<div className="d-flex flex-column justify-content-center mx-auto mt-3">
				<Navbar />
				<div className="container-fluid">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default Root;
