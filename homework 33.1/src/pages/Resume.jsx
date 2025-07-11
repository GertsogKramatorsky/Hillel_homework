import {
	Avatar,
	Box,
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Typography,
	Divider,
} from "@mui/material";
import {
	Phone,
	Email,
	Home,
	Facebook,
	Instagram,
	LinkedIn,
	Twitter,
	GitHub,
} from "@mui/icons-material";
import photo from "../assets/photo.jpg";

export default function Resume() {
	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Box
				display="flex"
				flexDirection={{ xs: "column", md: "row" }}
				gap={3}>
				<Box sx={{ flex: 1, minWidth: 300 }}>
					<Paper sx={{ p: 3, mb: 3 }}>
						<Box
							display="flex"
							flexDirection="column"
							alignItems="center">
							<Avatar
								src={photo}
								sx={{ width: 100, height: 100, mb: 2 }}
							/>
							<Typography variant="h6">
								Vladyslav Shestakov
							</Typography>
						</Box>
						<Divider sx={{ my: 2 }} />
						<List dense>
							<ListItem>
								<ListItemIcon>
									<Phone />
								</ListItemIcon>
								<ListItemText primary="+38 (095) 1234567" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Email />
								</ListItemIcon>
								<ListItemText primary="vlshestakoff@gmail.com" />
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<Home />
								</ListItemIcon>
								<ListItemText primary="Zdanovskoyi St, Kyiv, Ukraine" />
							</ListItem>
						</List>
					</Paper>

					<Paper sx={{ p: 3, mb: 3 }}>
						<Typography variant="h6" gutterBottom>
							Skills
						</Typography>
						<Typography variant="subtitle1">
							Programming Languages:
						</Typography>
						<Typography variant="body2" mb={1}>
							JavaScript
						</Typography>

						<Typography variant="subtitle1">Tech Stack:</Typography>
						<Typography variant="body2" mb={1}>
							Git, HTML, CSS/SCSS, React, Vite, Figma, Bootstrap,
							MUI, Chakra
						</Typography>
					</Paper>
				</Box>

				<Box sx={{ flex: 2 }}>
					<Paper sx={{ p: 3, pb: 9.3, mb: 3 }}>
						<Typography variant="h6" gutterBottom>
							Education
						</Typography>

						<Box mb={3}>
							<Typography variant="subtitle1">
								M.S. in Chemistry
							</Typography>
							<Typography variant="body2" color="text.secondary">
								2014
							</Typography>
							<Typography>
								Taras Shevchenko National University of Kyiv
							</Typography>
						</Box>

						<Box mb={3}>
							<Typography variant="subtitle1">
								EPAM Fundamentals FrontEnd-program
							</Typography>
							<Typography variant="body2" color="text.secondary">
								March 2025
							</Typography>
						</Box>

						<Box>
							<Typography variant="subtitle1">
								Hillel School FrontEnd-Pro
							</Typography>
							<Typography variant="body2" color="text.secondary">
								July 2025
							</Typography>
						</Box>
					</Paper>

					<Paper sx={{ p: 3, pb: 1.5 }}>
						<Typography variant="h6" gutterBottom>
							Work Experience
						</Typography>

						<Box mb={3}>
							<Typography variant="subtitle1">
								Head of Laboratory / UOS Ltd.
							</Typography>
							<Typography variant="body2" color="text.secondary">
								2009 - Present
							</Typography>
						</Box>

						<Box mb={3}>
							<Typography variant="subtitle1">
								FrontEnd Pet Projects
							</Typography>
							<Typography variant="body2" color="text.secondary">
								2023 - Present
							</Typography>
						</Box>
					</Paper>
				</Box>
			</Box>
		</Container>
	);
}
