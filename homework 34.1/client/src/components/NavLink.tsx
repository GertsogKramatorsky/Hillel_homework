import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import type { LinkProps as RouterLinkProps } from "react-router-dom";
import { forwardRef } from "react";

type Props = ChakraLinkProps & RouterLinkProps;

const NavLink = forwardRef<HTMLAnchorElement, Props>((props, ref) => (
	<ChakraLink as={RouterLink} ref={ref} {...props} />
));

export default NavLink;
