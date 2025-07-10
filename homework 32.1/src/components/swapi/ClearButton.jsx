import { useDispatch } from "react-redux";
import { clearInfo } from "../../redux/swapi/infoSlice";
import { Button, Box } from "@mui/material";

function ClearData() {
	const dispatch = useDispatch();

	const handleClear = () => {
		dispatch(clearInfo());
	};

	return (
		<Box sx={{ mt: 2, textAlign: "center" }}>
			<Button variant="outlined" color="error" onClick={handleClear}>
				Clear
			</Button>
		</Box>
	);
}

export default ClearData;
