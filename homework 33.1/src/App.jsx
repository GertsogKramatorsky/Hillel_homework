import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Todo from "./pages/Todo";
import Swapi from "./pages/Swapi";
import { Container, Box } from "@mui/material";

function App() {
	return (
		<Box display="flex" flexDirection="column" minHeight="100vh">
			<Header />
			<Container sx={{ flex: 1, mt: 2 }}>
				<Routes>
					<Route path="/" element={<Resume />} />
					<Route path="/todo" element={<Todo />} />
					<Route path="/swapi" element={<Swapi />} />
				</Routes>
			</Container>
			<Footer />
		</Box>
	);
}

export default App;
