import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#4a148c",
		},
		secondary: {
			main: "#c62828",
		},
		background: {
			default: "#fafbeb",
		},
	},
	typography: {
		fontFamily: "'Roboto', 'Arial', sans-serif",
	},
});

export default theme;
