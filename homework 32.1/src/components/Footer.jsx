import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				bgcolor: "primary.main",
				color: "white",
				py: 2,
				mt: "auto",
			}}>
			<Container maxWidth="sm">
				<Typography variant="body1" align="center">
					Контакти: vlshestakoff@gmail.com | Telegram:
					@vladyslav_shestakov
				</Typography>
			</Container>
		</Box>
	);
}
