import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useHotelStore } from "../store/useHotelStore";
import hotelsImage from "../assets/hotels_com.jpg";

const Hotels = () => {
	const hotels = useHotelStore((state) => state.hotels);
	const error = useHotelStore((state) => state.error);

	if (error) {
		return (
			<Box mt={6}>
				<Text color="red.500" fontWeight="bold">
					{error}
				</Text>
			</Box>
		);
	}

	if (!hotels.length) {
		return (
			<Box mt={6}>
				<Text>Loading hotels...</Text>
			</Box>
		);
	}

	return (
		<Box>
			<Heading mb={6}>Hotels</Heading>
			<Flex
				gap={4}
				mt={6}
				wrap={"wrap"}
				alignSelf={"center"}
				justifyContent={"space-between"}
				m={"0 auto"}>
				{hotels.map((hotel) => (
					<Box key={hotel.id}>
						<Image
							rounded="md"
							src={hotelsImage}
							alt="hotel_image"
							width={"350px"}
						/>
						<Box
							borderBottomWidth="1px"
							rounded="md"
							width={"350px"}
							mb={10}>
							<Heading size="md">{hotel.name}</Heading>
							<Text>{hotel.address}</Text>
							<Text>City: {hotel.city}</Text>
							<Text>Rating: {hotel.hotel_rating}</Text>
							<Text>Phone: {hotel.phone_number}</Text>
						</Box>
					</Box>
				))}
			</Flex>
		</Box>
	);
};

export default Hotels;
