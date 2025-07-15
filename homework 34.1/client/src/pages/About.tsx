import { Box, Heading, Text, chakra } from "@chakra-ui/react";

function About() {
	return (
		<>
			<Box>
				<Heading fontSize={"4xl"} my={20}>
					About Booking.com™
				</Heading>
				<Text>
					<chakra.p mb={10}>
						Founded in 1996 in Amsterdam, Booking.com has grown from
						a small Dutch startup to one of the world’s leading
						digital travel companies. Part of Booking Holdings Inc.
						(NASDAQ: BKNG), the mission of Booking.com is to
						<chakra.span fontWeight={"bold"}>
							{" "}
							make it easier for everyone to experience the world.
						</chakra.span>
					</chakra.p>
					<chakra.p mb={10}>
						By investing in the technology that helps take the
						friction out of travel, Booking.com seamlessly connects
						millions of travellers with memorable experiences, a
						range of transport options and incredible places to stay
						- from homes to hotels and much more. As one of the
						world’s largest travel marketplaces for both established
						brands and entrepreneurs of all sizes, Booking.com
						enables properties all over the world to reach a global
						audience and grow their businesses.
					</chakra.p>
					<chakra.p>
						Booking.com is available in 43 languages and offers more
						than 28 million total reported accommodation listings,
						including over 6.6 million listings alone of homes,
						apartments and other unique places to stay. No matter
						where you want to go or what you want to do, Booking.com
						makes it easy and backs it all up with 24/7 customer
						support.
					</chakra.p>
				</Text>
			</Box>
		</>
	);
}

export default About;
