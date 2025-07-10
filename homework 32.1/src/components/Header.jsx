import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					My Portfolio
				</Typography>
				<Button color="inherit" component={RouterLink} to="/">
					Resume
				</Button>
				<Button color="inherit" component={RouterLink} to="/todo">
					Todo
				</Button>
				<Button color="inherit" component={RouterLink} to="/swapi">
					Swapi
				</Button>
			</Toolbar>
		</AppBar>
	);
}
