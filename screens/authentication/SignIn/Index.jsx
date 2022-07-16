// react
import React, { useState, useEffect, useLayoutEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// nativebase
import {
	Button,
	HStack,
	VStack,
	FormControl,
	Text,
	Link,
	Checkbox,
	Divider,
	Image,
	useColorModeValue,
	IconButton,
	Icon,
	Pressable,
	Center,
	Hidden,
	StatusBar,
	Stack,
	Box,
	WarningOutlineIcon,
	CloseIcon,
} from "native-base";

// icons
import IconGoogle from "./components/IconGoogle";
import IconFacebook from "./components/IconFacebook";
import { AntDesign, Entypo } from "@expo/vector-icons";

// components
import FloatingLabelInput from "./components/FloatingLabelInput";
// functions
import AWS_SignIn from "../../../functions/authentication/AWS_SignIn";
// screens
import { Loading } from "../../loading/LoadingScreen";
// navigation
import { useNavigation } from "@react-navigation/native";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../services/redux/actions";
import { storeObj } from "../../../data/localStorage";

export function SignInForm({ props }) {
	// navigation
	const navigation = useNavigation();
	// redux
	const { user } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();
	// state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPass, setShowPass] = React.useState(false);
	const [loading, setLoading] = useState(false);
	const [loadingMessage, setloadingMessage] = useState();
	const [errorMessage, setErrorMessage] = useState();
	// useEffect
	useEffect(() => {
		// handle errors
		if (errorMessage) {
			console.log("uncaught error", errorMessage);
			setloadingMessage(errorMessage);
			setTimeout(() => {
				setloadingMessage();
			}, "1500");
			if (errorMessage == "User is not confirmed.") {
				navigation.navigate("OTP", { destination: email });
			}
		}
	}, [errorMessage]);

	// functions
	const signIn = async () => {
		setLoading(true);
		try {
			const id = await await AWS_SignIn({
				email,
				password,
			});
			const result = await id;
			console.log(result);
			const saveToLocal = storeObj({ key: "UserID_Local", value: result });
			dispatch(setUserID(result));
		} catch (err) {
			setErrorMessage(err);
		}
		setLoading(false);
	};

	return (
		<KeyboardAwareScrollView
			contentContainerStyle={{
				flexGrow: 1,
			}}
			style={{ flex: 1 }}
		>
			<VStack
				flex="1"
				px="6"
				py="9"
				_light={{ bg: "white" }}
				_dark={{ bg: "coolGray.800" }}
				space="3"
				justifyContent="space-between"
				borderTopRightRadius={{ base: "2xl", md: "xl" }}
				borderBottomRightRadius={{ base: "0", md: "xl" }}
				borderTopLeftRadius={{ base: "2xl", md: "0" }}
			>
				<VStack space="7">
					<Hidden till="md">
						<Text
							fontFamily={"Manrope-Regular"}
							fontSize="lg"
							fontWeight="normal"
						>
							Sign in to continue!
						</Text>
					</Hidden>
					<VStack>
						<VStack space="3">
							<VStack space={{ base: "7", md: "4" }}>
								<FloatingLabelInput
									isRequired
									label="Email"
									labelColor="#9ca3af"
									labelBGColor={useColorModeValue("#fff", "#1f2937")}
									borderRadius="4"
									defaultValue={email}
									onChangeText={(txt) => setEmail(txt)}
									_text={{
										fontFamily: "Manrope-Light",
										fontSize: "sm",
										fontWeight: "medium",
									}}
									_dark={{
										borderColor: "coolGray.700",
									}}
									_light={{
										borderColor: "coolGray.300",
									}}
								/>
								{errorMessage == "Incorrect username or password." ? (
									<FormControl isInvalid>
										<FloatingLabelInput
											isRequired
											type={showPass ? "" : "password"}
											label="Password"
											borderRadius="4"
											labelColor="#9ca3af"
											labelBGColor={useColorModeValue("#fff", "#1f2937")}
											defaultValue={password}
											onChangeText={(txt) => setPassword(txt)}
											InputRightElement={
												<IconButton
													variant="unstyled"
													icon={
														<Icon
															size="4"
															color="coolGray.400"
															as={Entypo}
															name={showPass ? "eye-with-line" : "eye"}
														/>
													}
													onPress={() => {
														setShowPass(true);
													}}
												/>
											}
											_text={{
												fontFamily: "Manrope-Light",
												fontSize: "sm",
												fontWeight: "medium",
											}}
											_dark={{
												borderColor: "coolGray.700",
											}}
											_light={{
												borderColor: "coolGray.300",
											}}
										/>
										<FormControl.ErrorMessage
											leftIcon={<WarningOutlineIcon size="xs" />}
										>
											Try a different password.
										</FormControl.ErrorMessage>
									</FormControl>
								) : (
									<FloatingLabelInput
										isRequired
										type={showPass ? "" : "password"}
										label="Password"
										borderRadius="4"
										labelColor="#9ca3af"
										labelBGColor={useColorModeValue("#fff", "#1f2937")}
										defaultValue={password}
										onChangeText={(txt) => setPassword(txt)}
										InputRightElement={
											<IconButton
												variant="unstyled"
												icon={
													<Icon
														size="4"
														color="coolGray.400"
														as={Entypo}
														name={showPass ? "eye-with-line" : "eye"}
													/>
												}
												onPress={() => {
													setShowPass(true);
												}}
											/>
										}
										_text={{
											fontFamily: "Manrope-Light",
											fontSize: "sm",
											fontWeight: "medium",
										}}
										_dark={{
											borderColor: "coolGray.700",
										}}
										_light={{
											borderColor: "coolGray.300",
										}}
									/>
								)}
							</VStack>
							<Link
								ml="auto"
								_text={{
									fontFamily: "Manrope-Regular",
									fontSize: "xs",
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
										color: "primary.500",
									},
								}}
							>
								Forgot password?
							</Link>
							<Checkbox
								alignItems="flex-start"
								mt="5"
								isChecked
								value="demo"
								colorScheme="primary"
								accessibilityLabel="Remember me"
							>
								<Text
									fontFamily={"Manrope-Light "}
									pl="3"
									fontWeight="normal"
									color="coolGray.400"
								>
									Remember me and keep me logged in
								</Text>
							</Checkbox>
							{/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
							<Button
								mt="5"
								size="md"
								borderRadius="4"
								_text={{
									fontWeight: "medium",
								}}
								_light={{
									bg: "primary.900",
								}}
								_dark={{
									bg: "primary.700",
								}}
								onPress={() => {
									signIn();
								}}
							>
								{!loading ? (
									<>
										{!loadingMessage && (
											<Text fontFamily={"Manrope-ExtraBold"} color="white">
												Sign In
											</Text>
										)}
										{loadingMessage === "User is not confirmed." && (
											<HStack alignItems="center" space={2}>
												<WarningOutlineIcon color="white" size="sm" />
												<Text fontFamily={"Manrope-ExtraBold"} color="white">
													Attention needed
												</Text>
											</HStack>
										)}
										{loadingMessage === "Incorrect username or password." && (
											<HStack alignItems="center" space={2}>
												<CloseIcon size="sm" color="white" />
												<Text
													fontFamily={"Manrope-ExtraBold"}
													color="white"
													fontSize="md"
												>
													Try again
												</Text>
											</HStack>
										)}
										{/* {loadingMessage == "Incorrect username or password" && (
											<HStack space={2}>
												<CheckIcon size="5" mt="0.5" color="emerald.500" />
												<Text color="emerald.500" fontSize="md">
													Order Placed Successfully
												</Text>
											</HStack>
										)} */}
									</>
								) : (
									<Loading
										spinnerColor={"white"}
										textColor={"white"}
										accessibilityLabel={"loading sign-in promise"}
									/>
								)}
							</Button>
							{/* Closing Link Tag */}
							<HStack
								mt="5"
								space="2"
								mb={{ base: 6, md: 7 }}
								alignItems="center"
								justifyContent="center"
							>
								<Divider
									w="30%"
									_light={{ bg: "coolGray.200" }}
									_dark={{ bg: "coolGray.700" }}
								></Divider>
								<Text
									fontFamily={"Manrope-Light"}
									fontWeight="medium"
									_light={{ color: "coolGray.300" }}
									_dark={{ color: "coolGray.500" }}
								>
									or
								</Text>
								<Divider
									w="30%"
									_light={{ bg: "coolGray.200" }}
									_dark={{ bg: "coolGray.700" }}
								></Divider>
							</HStack>
						</VStack>
						<Center>
							<HStack space="4">
								<Pressable>
									<IconFacebook />
								</Pressable>
								<Pressable>
									<IconGoogle />
								</Pressable>
							</HStack>
						</Center>
					</VStack>
				</VStack>
				<HStack
					mb="4"
					space="1"
					safeAreaBottom
					alignItems="center"
					justifyContent="center"
					mt={{ base: "auto", md: "8" }}
				>
					<Text
						fontFamily={"Manrope-Light"}
						_light={{ color: "coolGray.800" }}
						_dark={{ color: "coolGray.400" }}
					>
						Don't have an account?
					</Text>
					{/* Opening Link Tag navigateTo:"SignUp" */}
					<Link
						_text={{
							fontFamily: "Manrope-Bold",
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
								color: "primary.500",
							},
						}}
						onPress={() => {
							props.navigation.navigate("SignUp");
						}}
					>
						Sign up
					</Link>
					{/* Closing Link Tag */}
				</HStack>
			</VStack>
		</KeyboardAwareScrollView>
	);
}
export default function SignIn(props) {
	// navigation
	const navigation = useNavigation();
	// redux
	const { user } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (user) {
			if (user.status == "unconfirmed") {
				navigation.push("OTP", { destination: email });
			}
		}
	}, []);

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
						<VStack px="4" mt="4" mb="5" space="9">
							{/* <HStack space="2" alignItems="center">
								<IconButton
									variant="unstyled"
									pl="0"
									onPress={() => {}}
									icon={
										<Icon
											size="6"
											as={AntDesign}
											name="arrowleft"
											color="coolGray.50"
										/>
									}
								/>
								<Text
									fontFamily={"Manrope-Light"}
									color="coolGray.50"
									fontSize="lg"
								>
									Sign In
								</Text>
							</HStack> */}
							<VStack space="2">
								<Text
									fontFamily={"Manrope-Light"}
									fontSize="3xl"
									fontWeight="bold"
									color="coolGray.50"
								>
									Welcome back,
								</Text>
								<Text
									fontFamily={"Manrope-Light"}
									fontSize="md"
									_dark={{
										color: "coolGray.400",
									}}
									_light={{
										color: "primary.300",
									}}
								>
									Sign in to continue
								</Text>
							</VStack>
						</VStack>
					</Hidden>
					<Hidden till="md">
						<Center
							flex="1"
							bg="primary.700"
							borderTopLeftRadius={{ base: "0", md: "xl" }}
							borderBottomLeftRadius={{ base: "0", md: "xl" }}
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
					<SignInForm props={props} />
				</Stack>
			</Center>
		</>
	);
}
