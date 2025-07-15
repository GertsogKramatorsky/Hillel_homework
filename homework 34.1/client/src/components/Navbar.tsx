import { Box, Circle, Flex, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import NavLink from "./NavLink";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
];

function Navbar() {
	return (
		<>
			<Box bg={"white"} borderBottomWidth={"2px"}>
				<Flex
					justifyContent={"space-between"}
					alignItems={"center"}
					height={"70px"}
					shadow="md"
					pl={"20px"}
					pr={"20px"}>
					<Flex gap={4}>
						<Circle size="40px" bg="orange.400" />
						<NavLink
							as={RouterLink}
							to="/"
							color={"orange.400"}
							fontWeight={"bold"}
							fontSize={"2xl"}
							_hover={{ textDecoration: "none" }}
							_focus={{ outline: "none", boxShadow: "none" }}>
							Booking
						</NavLink>
					</Flex>
					<Flex gap={4}>
						{navItems.map((item) => (
							<NavLink
								key={item.name}
								as={RouterLink}
								to={item.path}
								color={"white"}
								_hover={{ textDecoration: "none" }}>
								<Button bg={"orange.400"}>{item.name}</Button>
							</NavLink>
						))}
					</Flex>
				</Flex>
			</Box>
		</>
	);
}

export default Navbar;
