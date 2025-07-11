import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchInfoData } from "../../redux/swapi/infoSlice";
import {
	Box,
	Button,
	TextField,
	Typography,
	InputAdornment,
} from "@mui/material";

function Input() {
	const [endpoint, setEndpoint] = useState("");
	const dispatch = useDispatch();

	const handleRequest = () => {
		if (endpoint.trim()) {
			dispatch(fetchInfoData(endpoint));
		}
	};

	return (
		<Box sx={{ maxWidth: 600, mx: "auto", my: 4 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Try it now!
			</Typography>
			<Box sx={{ display: "flex", gap: 2 }}>
				<TextField
					fullWidth
					variant="outlined"
					label="Endpoint"
					placeholder="...try people/1, or select from below"
					value={endpoint}
					onChange={(e) => setEndpoint(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								https://www.swapi.tech/api/
							</InputAdornment>
						),
					}}
				/>
				<Button
					variant="contained"
					color="secondary"
					onClick={handleRequest}>
					Request
				</Button>
			</Box>
		</Box>
	);
}

export default Input;
