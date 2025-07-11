import { useSelector } from "react-redux";
import { Typography, Box, CircularProgress, Alert, Paper } from "@mui/material";

function Content() {
	const { result, loading, error } = useSelector((state) => state.info);

	if (loading)
		return (
			<Box mt={3} display="flex" justifyContent="center">
				<CircularProgress />
			</Box>
		);

	if (error)
		return (
			<Box mt={3}>
				<Alert severity="error">{error}</Alert>
			</Box>
		);

	if (!result) return null;

	return (
		<Box mt={4}>
			<Typography variant="h5" gutterBottom>
				Result
			</Typography>
			<Paper elevation={3} sx={{ padding: 2, overflowX: "auto" }}>
				<pre style={{ margin: 0 }}>
					{JSON.stringify(result, null, 2)}
				</pre>
			</Paper>
		</Box>
	);
}

export default Content;
