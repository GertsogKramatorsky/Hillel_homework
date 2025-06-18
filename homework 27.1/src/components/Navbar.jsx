import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";

function Navbar({ setPage }) {
	return (
		<>
			<ul className="nav nav-pills nav-justified">
				<li className="nav-item">
					<NavLink
						className="nav-link"
						to="/"
						onClick={() => setPage("about")}>
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						className="nav-link"
						to="/about"
						onClick={() => setPage("about")}>
						About
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						className="nav-link"
						to="/contacts"
						onClick={() => setPage("contacts")}>
						Contacts
					</NavLink>
				</li>
				<li className="nav-item">
					<ThemeButton />
				</li>
			</ul>
		</>
	);
}

export default Navbar;
