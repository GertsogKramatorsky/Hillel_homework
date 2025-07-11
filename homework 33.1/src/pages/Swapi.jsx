import ClearData from "../components/swapi/ClearButton";
import Input from "../components/swapi/Input";
import Content from "../components/swapi/Content";
import { Box } from "@mui/material";

function Swapi() {
	return (
		<Box>
			<Input />
			<Content />
			<ClearData />
		</Box>
	);
}

export default Swapi;
