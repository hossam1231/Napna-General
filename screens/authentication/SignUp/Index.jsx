// react
import React, { useState, useEffect } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// nativebase
import {
	Button,
	Checkbox,
	Image,
	InputLeftAddon,
	InputGroup,
	HStack,
	VStack,
	InputRightAddon,
	Input,
	Text,
	Link,
	Divider,
	Icon,
	IconButton,
	useColorModeValue,
	Pressable,
	Hidden,
	Center,
	StatusBar,
	CheckIcon,
	Box,
	Stack,
} from "native-base";
// icons
import { Entypo, AntDesign } from "@expo/vector-icons";
import IconGoogle from "./components/IconGoogle";
import IconFacebook from "./components/IconFacebook";
// aws
import AWS_SignUp from "../../../functions/authentication/AWS_SignUp";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../services/redux/actions";
// local storage
import { storeObj } from "../../../data/localStorage";
// navigation
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// components
import FloatingLabelInput from "./components/FloatingLabelInput";
import { Loading } from "../../loading/LoadingScreen";

// pages
import Page1 from "./components/pages/Page1";
import ProceedButton from "./components/pages/ProceedButton";

function SignUpForm({ props }) {
	// redux
	const { user } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();
	// navigation
	const SignUpNavigator = createNativeStackNavigator();
	const navigation = useNavigation();
	// add next router here
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [preferredUsername, setPreferredUsername] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirm_pass, setConfirmPass] = useState("");
	const [showPass, setShowPass] = React.useState(false);
	const [showConfirmPass, setShowConfirmPass] = React.useState(false);
	const [userPrivate, setUserPrivate] = useState();
	const [loading, setLoading] = useState(false);
	const [loadingMessage, setloadingMessage] = useState();
	const [errorMessage, setErrorMessage] = useState();
	const [page, setPage] = useState(1);
	const [proceed, setProceed] = useState(false);
	const [proceedPressed, setproceedPressed] = useState(false);

	// useEffect(() => {
	// 	if (page === 1) {
	// 		if (phoneNumber.length === 12) {
	// 			console.log("valid ");
	// 			setProceed(true);
	// 		}
	// 	}

	// 	if (page === 2) {
	// 		if (name && email) {
	// 			setProceed(true);
	// 		}
	// 	}

	// 	if (page === 3) {
	// 		console.log("hi");
	// 	}
	// }, [email, name, phoneNumber, password, confirm_pass, preferredUsername]);

	// functions
	const signUp = async () => {
		setLoading(true);
		try {
			const user = await await AWS_SignUp({
				email,
				password,
				phoneNumber,
				preferredUsername,
				name,
			});
			const result = await user;
			console.log(result);
			dispatch(setUser({ status: "unconfirmed", email: email }));
			const storeLocal = storeObj({
				key: "User_Local",
				value: { status: "unconfirmed", email: email },
			});
		} catch (err) {
			setErrorMessage(err);
		}
		setLoading(false);
	};

	// useEffect(() => {

	// }, [third])

	function proceedFunction() {
		setPage(page + 1);
		setProceed(false);
	}

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
				justifyContent="space-between"
				space="3"
				borderTopRightRadius={{ base: "2xl", md: "xl" }}
				borderBottomRightRadius={{ base: "0", md: "xl" }}
				borderTopLeftRadius={{ base: "2xl", md: "0" }}
			>
				<VStack space="7">
					<Hidden till="md">
						<Text
							fontFamily="Manrope-ExtraBold"
							fontSize="lg"
							fontWeight="normal"
						>
							Sign up to continue!
						</Text>
					</Hidden>
					<VStack>
						<VStack space="8">
							<VStack space={{ base: "7", md: "4" }}>
								<NavigationContainer independent={true}>
									<SignUpNavigator.Navigator>
										<SignUpNavigator.Screen
											name="Page1"
											component={Page1}
											options={{ headerShown: false }}
										/>
									</SignUpNavigator.Navigator>
								</NavigationContainer>
							</VStack>

							<ProceedButton />

							{page === 4 && (
								<Button
									size="md"
									borderRadius="4"
									_text={{
										fontSize: "sm",
										fontWeight: "medium",
										fontFamily: "Manrope-Light",
									}}
									_light={{
										bg: "primary.900",
									}}
									_dark={{
										bg: "primary.700",
									}}
									onPress={() => {
										// props.navigation.navigate("OTP");
										signUp();
									}}
								>
									{!loading ? (
										<>
											{!loadingMessage && (
												<Text fontFamily={"Manrope-Bold"} color="white">
													Sign Up
												</Text>
											)}
											{loadingMessage === "User is not confirmed." && (
												<HStack alignItems="center" space={2}>
													<WarningOutlineIcon color="white" size="sm" />
													<Text fontFamily={"Manrope-Bold"} color="white">
														Attention needed
													</Text>
												</HStack>
											)}
											{loadingMessage === "Incorrect username or password." && (
												<HStack alignItems="center" space={2}>
													<CloseIcon size="sm" color="white" />
													<Text
														fontFamily={"Manrope-Bold"}
														color="white"
														fontSize="md"
													>
														Try again
													</Text>
												</HStack>
											)}
											{/* {loadingMessage === "Incorrect username or password" && (
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
							)}
							<HStack
								space="2"
								mb={{ base: "6", md: "7" }}
								alignItems="center"
								justifyContent="center"
							>
								<Divider
									w="30%"
									_light={{ bg: "coolGray.200" }}
									_dark={{ bg: "coolGray.700" }}
								></Divider>
								<Text
									fontFamily={"Manrope-Bold"}
									fontSize="sm"
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
					alignItems="center"
					justifyContent="center"
					mt={{ base: "auto", md: "8" }}
				>
					<Text
						fontFamily={"Manrope-Light"}
						fontSize="sm"
						_light={{ color: "coolGray.800" }}
						_dark={{ color: "coolGray.400" }}
					>
						Already have an account?
					</Text>
					{/* Opening Link Tag navigateTo:"SignIn" */}
					<Link
						_text={{
							fontSize: "sm",
							fontWeight: "bold",
							textDecoration: "none",
							fontFamily: "Manrope-Bold",
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
							props.navigation.navigate("SignIn");
						}}
					>
						Sign in
					</Link>
					{/* Closing Link Tag */}
				</HStack>
			</VStack>
		</KeyboardAwareScrollView>
	);
}

export default function SignUp(props) {
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
									pl="0"
									variant="unstyled"
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
									Sign Up
								</Text>
							</HStack> */}
							<VStack space="2">
								<Text
									fontFamily={"Manrope-Light"}
									fontSize="3xl"
									fontWeight="bold"
									color="coolGray.50"
								>
									Welcome
								</Text>
								<Text
									fontFamily={"Manrope-Light"}
									fontSize="md"
									fontWeight="normal"
									_dark={{
										color: "coolGray.400",
									}}
									_light={{
										color: "primary.300",
									}}
								>
									Sign up to continue
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
					<SignUpForm props={props} />
				</Stack>
			</Center>
		</>
	);
}
