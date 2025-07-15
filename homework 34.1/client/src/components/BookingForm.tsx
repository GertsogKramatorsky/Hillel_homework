import { Box, Button, Flex, Input, chakra } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useHotelStore } from "../store/useHotelStore";
import { useNavigate } from "react-router";

type FormValues = {
	destination: string;
	checkIn: string;
	checkOut: string;
	adults: number;
	children: number;
};

const BookingForm = () => {
	const fetchHotelsByDestination = useHotelStore(
		(state) => state.fetchHotelsByDestination
	);

	const initialValues: FormValues = {
		destination: "",
		checkIn: "",
		checkOut: "",
		adults: 1,
		children: 0,
	};

	const navigate = useNavigate();
	const handleSubmit = async (values: FormValues) => {
		await fetchHotelsByDestination(values.destination);
		console.log("Destination:", values.destination);

		navigate("/hotels");
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			{({ values, setFieldValue }) => (
				<Form>
					<Box>
						<Flex
							gap={4}
							justifyContent={"space-between"}
							alignItems={"center"}>
							<Field
								as={Input}
								name="destination"
								placeholder="Destination"
								list="city-options"
							/>
							<datalist id="city-options">
								<option value="Boston" />
								<option value="New York" />
							</datalist>

							<Field
								as={Input}
								type="text"
								name="checkIn"
								placeholder="Check-in"
								onFocus={(
									e: React.FocusEvent<HTMLInputElement>
								) => (e.target.type = "date")}
								onBlur={(
									e: React.FocusEvent<HTMLInputElement>
								) => {
									if (!e.target.value) e.target.type = "text";
								}}
							/>

							<Field
								as={Input}
								type="text"
								name="checkOut"
								placeholder="Check-out"
								onFocus={(
									e: React.FocusEvent<HTMLInputElement>
								) => (e.target.type = "date")}
								onBlur={(
									e: React.FocusEvent<HTMLInputElement>
								) => {
									if (!e.target.value) e.target.type = "text";
								}}
							/>

							<chakra.label htmlFor="adults" ml={8}>
								Adults
							</chakra.label>
							<Input
								id="adults"
								type="number"
								min={1}
								value={values.adults}
								onChange={(e) =>
									setFieldValue(
										"adults",
										Number(e.target.value)
									)
								}
							/>

							<chakra.label htmlFor="children" ml={8}>
								Children
							</chakra.label>
							<Input
								id="children"
								type="number"
								min={0}
								value={values.children}
								onChange={(e) =>
									setFieldValue(
										"children",
										Number(e.target.value)
									)
								}
							/>

							<Button type="submit" bg={"orange.400"}>
								Submit
							</Button>
						</Flex>
					</Box>
				</Form>
			)}
		</Formik>
	);
};

export default BookingForm;
