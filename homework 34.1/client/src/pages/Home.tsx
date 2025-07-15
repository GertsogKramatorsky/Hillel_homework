import { Box, Heading, Text, chakra } from "@chakra-ui/react";
import BookingForm from "../components/BookingForm";

function Home() {
	return (
		<>
			<BookingForm />
			<Box mt={10}>
				<Heading mb={6} fontWeight={"bold"} fontSize={"3xl"}>
					Travel with
					<chakra.span color={"orange.400"}> Booking</chakra.span>
				</Heading>
				<Text>
					<chakra.span fontWeight={"bold"}>
						Incredible choice
					</chakra.span>
					<chakra.p mb={6}>
						Whether you want to stay in a chic city apartment, a
						luxury beach resort or a cosy B&B in the countryside,
						Booking.com provides you with amazing diversity and
						breadth of choice - all in one place.
					</chakra.p>
					<chakra.span fontWeight={"bold"}>Low rates</chakra.span>
					<chakra.p mb={6}>
						Booking.com guarantees to offer you the best available
						rates. And with our promise to price match, you can rest
						assured that you’re always getting a great deal.
					</chakra.p>
					<chakra.span fontWeight={"bold"}>
						Instant confirmation
					</chakra.span>
					<chakra.p mb={6}>
						At Booking.com, every reservation is instantly
						confirmed. Once you’ve found your perfect stay, a few
						clicks are all it takes.
					</chakra.p>
					<chakra.span fontWeight={"bold"}>
						No reservation fees
					</chakra.span>
					<chakra.p mb={6}>
						We don’t charge you any booking fees or add any
						administrative charges. And in many cases, your booking
						can be cancelled free of charge.
					</chakra.p>
					<chakra.span fontWeight={"bold"}>
						Secure booking
					</chakra.span>
					<chakra.p mb={6}>
						We facilitate hundreds of thousands of transactions
						every day through our secure platform, and work to the
						highest standards to guarantee your privacy. For further
						details, please check our Privacy Statement.
					</chakra.p>
					<chakra.span fontWeight={"bold"}>24/7 support</chakra.span>
					<chakra.p mb={6}>
						Whether you’ve just booked or are already enjoying your
						trip, our customer experience team are on hand around
						the clock to answer your questions and advocate on your
						behalf in more than 40 languages. Make sure to check out
						our FAQ for travellers.
					</chakra.p>
				</Text>
			</Box>
		</>
	);
}

export default Home;
