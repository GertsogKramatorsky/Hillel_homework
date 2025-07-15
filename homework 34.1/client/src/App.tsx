import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

import { Container } from "@chakra-ui/react";

function App() {
	return (
		<>
			<Navbar />
			<Container maxW="container.md" py={4}>
				<Outlet />
			</Container>
		</>
	);
}

export default App;
