import React, { useState, useEffect } from "react";
import {
	VStack,
	Box,
	HStack,
	Icon,
	Text,
	Link,
	Button,
	Image,
	Hidden,
	IconButton,
	Center,
	FormControl,
	StatusBar,
	Stack,
	Input,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import AWS_ResendConfirmation from "../../../functions/authentication/AWS_ResendConfirmation";
import AWS_ConfirmUser from "../../../functions/authentication/AWS_ConfirmUser";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setUserID, setUser } from "../../../services/redux/actions";
import { removeObj } from "../../../data/localStorage";

// navigaion
import { useRoute, useNavigation } from "@react-navigation/native";

function PinInput({ pin, setPin }) {
	// useref focus change when value has one inside
	const [pin0, setPin0] = useState("");
	const [pin1, setPin1] = useState("");
	const [pin2, setPin2] = useState("");
	const [pin3, setPin3] = useState("");
	const [pin4, setPin4] = useState("");
	const [pin5, setPin5] = useState("");

	useEffect(() => {
		setPin(pin0 + pin1 + pin2 + pin3 + pin4 + pin5);
	}, [pin5, pin4, pin3, pin2, pin1, pin0]);

	const handleChange0 = (text) => {
		setPin0(text);
	};
	const handleChange1 = (text) => {
		setPin1(text);
	};
	const handleChange2 = (text) => {
		setPin2(text);
	};
	const handleChange3 = (text) => {
		setPin3(text);
	};
	const handleChange4 = (text) => {
		setPin4(text);
	};
	const handleChange5 = (text) => {
		setPin5(text);
	};

	return (
		<HStack space="2">
			<Input
				key={0}
				variant="underlined"
				boxSize="12"
				textAlign="center"
				borderBottomWidth="2"
				value={pin0}
				onChangeText={handleChange0}
				fontSize="lg"
			/>
			<Input
				key={1}
				variant="underlined"
				boxSize="12"
				textAlign="center"
				borderBottomWidth="2"
				value={pin1}
				onChangeText={handleChange1}
				fontSize="lg"
			/>
			<Input
				key={2}
				variant="underlined"
				boxSize="12"
				textAlign="center"
				borderBottomWidth="2"
				value={pin2}
				onChangeText={handleChange2}
				fontSize="lg"
			/>
			<Input
				key={3}
				variant="underlined"
				boxSize="12"
				textAlign="center"
				borderBottomWidth="2"
				value={pin3}
				onChangeText={handleChange3}
				fontSize="lg"
			/>
			<Input
				key={4}
				variant="underlined"
				boxSize="12"
				textAlign="center"
				borderBottomWidth="2"
				value={pin4}
				onChangeText={handleChange4}
				fontSize="lg"
			/>
			<Input
				key={5}
				variant="underlined"
				boxSize="12"
				textAlign="center"
				borderBottomWidth="2"
				value={pin5}
				onChangeText={handleChange5}
				fontSize="lg"
			/>
		</HStack>
	);
}
export default function OtpVerification({ destination }) {
	// state
	const [pin, setPin] = useState();
	// redux
	const { user } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();
	// navigation
	const route = useRoute();
	const navigation = useNavigation();
	// function
	function removePreUser() {
		const removeUserLOCAL = removeObj("USER_LOCAL");
		removeUserLOCAL.then(function (result) {
			// here you can use the result of promise
			dispatch(setUser(undefined));
			navigation.goBack();
		});
	}

	// add next router here
	return (
		<>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>
			<Box
				safeAreaTop
				_light={{ bg: "primary.900" }}
				_dark={{ bg: "coolGray.900" }}
			/>
			<Center
				my="auto"
				_dark={{ bg: "coolGray.900" }}
				_light={{ bg: "primary.900" }}
				flex="1"
			>
				<Stack
					flexDirection={{ base: "column", md: "row" }}
					w="100%"
					maxW={{ md: "1016px" }}
					flex={{ base: "1", md: "none" }}
				>
					<Hidden from="md">
						<HStack space="2" px="4" mt="4" mb="5" alignItems="center">
							<IconButton
								variant="unstyled"
								onPress={() => {
									removePreUser();
								}}
								icon={
									<Icon
										alignItems="center"
										justifyContent="center"
										size="6"
										as={AntDesign}
										name="arrowleft"
										color="coolGray.50"
									/>
								}
							/>
							<Text color="coolGray.50" fontSize="lg">
								Create Password
							</Text>
						</HStack>
					</Hidden>
					<Hidden till="md">
						<Center
							flex="1"
							bg="primary.700"
							px={{ base: "4", md: "8" }}
							borderTopLeftRadius={{ md: "xl" }}
							borderBottomLeftRadius={{ md: "xl" }}
						>
							<Image
								h="24"
								size="80"
								alt="NativeBase Startup+ "
								resizeMode={"contain"}
								source={require("./components/logo.png")}
							/>
						</Center>
					</Hidden>
					<Box
						py={{ base: "6", md: "12" }}
						px={{ base: "4", md: "10" }}
						_light={{ bg: "white" }}
						_dark={{ bg: "coolGray.800" }}
						flex="1"
						borderTopRightRadius={{ md: "xl" }}
						borderBottomRightRadius={{ md: "xl" }}
					>
						<VStack justifyContent="space-between" flex="1" space="24">
							<Box>
								<VStack space={{ base: "4", md: "5" }}>
									<Text
										fontSize="xl"
										fontWeight="bold"
										_dark={{ color: "coolGray.50" }}
										_light={{ color: "coolGray.800" }}
									>
										Enter OTP
									</Text>
									<HStack space="2" alignItems="center">
										<Text
											_light={{ color: "coolGray.800" }}
											_dark={{ color: "coolGray.400" }}
										>
											We have sent the OTP code to
										</Text>
										<Text
											fontWeight="bold"
											_light={{ color: "coolGray.800" }}
											_dark={{ color: "coolGray.300" }}
										>
											{route.params.destination}
										</Text>
									</HStack>
								</VStack>
								<VStack space="12" mt="6">
									<FormControl>
										<PinInput
											destination={route.params.destination}
											pin={pin}
											setPin={setPin}
										/>
										<FormControl.HelperText mt="7">
											<HStack>
												<Text
													_light={{ color: "coolGray.800" }}
													_dark={{ color: "coolGray.400" }}
												>
													Didn’t receive the OTP?
												</Text>
												<Link
													ml="5"
													_text={{
														_light: { color: "primary.900" },
														_dark: { color: "violet.500" },
														fontWeight: "bold",
														color: "violet.700",
														textDecoration: "none",
													}}
													onPress={() =>
														AWS_ResendConfirmation({
															email: route.params.destination,
														})
													}
												>
													RESEND OTP
												</Link>
											</HStack>
										</FormControl.HelperText>
									</FormControl>
									{/* Opening Link Tag navigateTo:"SignUp" (react/Router) */}
									<Button
										size="md"
										_light={{
											bg: "primary.900",
										}}
										_dark={{
											bg: "primary.700",
										}}
										onPress={() => {
											AWS_ConfirmUser({
												pin: pin,
												email: route.params.destination,
											});
										}}
									>
										PROCEED
									</Button>
									{/* Closing Link Tag */}
								</VStack>
							</Box>
							<HStack
								mt="28"
								mb="4"
								space="1"
								safeAreaBottom
								alignItems="center"
								justifyContent="center"
							>
								<Text
									_light={{ color: "coolGray.800" }}
									_dark={{ color: "coolGray.400" }}
								>
									Not you?
								</Text>
								{/* Opening Link Tag navigateTo:"SignUp" */}
								<Link
									_text={{
										fontWeight: "bold",
										textDecoration: "none",
									}}
									_light={{
										_text: {
											color: "primary.900",
										},
									}}
									_dark={{
										_text: {
											color: "violet.500",
										},
									}}
									onPress={() => {
										removePreUser();
									}}
								>
									Go back
								</Link>
								{/* Closing Link Tag */}
							</HStack>
						</VStack>
					</Box>
				</Stack>
			</Center>
		</>
	);
}
