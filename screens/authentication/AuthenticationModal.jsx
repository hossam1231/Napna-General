import {
	Box,
	VStack,
	Text,
	Button,
	Input,
	HStack,
	SectionList,
	Center,
	Icon,
	View,
	Pressable,
} from "native-base";
import React, { useState } from "react";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { emailProviders, federationProviders } from "./FederationProviders";
// import { signIn, signUp } from "../../components/authentication/Cognito";

const AuthenticationModal = () => {
	const [page, setPage] = useState(0);
	return (
		<Box px="2" justifyContent="center" alignItems="center" flex="1">
			<TabContent page={page} setPage={setPage} />
			<TabSwitcher page={page} setPage={setPage} />
		</Box>
	);
};

export const TabContent = ({ page, setPage }) => {
	const [authType, setAuthType] = useState();
	const [credentials, setCredentials] = useState({
		email: "",
		username: "",
		password: "",
		phoneNumber: "",
	});

	// const authenticate = () => {
	// 	if (authType == "Sign In") {
	// 		signIn(credentials);
	// 	}

	// 	if (authType == "Get Started") {
	// 		signUp(credentials);
	// 	}
	// };

	if (page === 0) {
		return (
			<>
				<Text fontSize="md">Almost there</Text>
				<Text>Sign up or log in to continue.</Text>
				<Text>It only takes a minute.</Text>

				<FederationLogin />

				<Text>or</Text>

				<Button variant="ghost" onPressIn={() => setPage(1)}>
					Continue with email
				</Button>
				<TermsConditions />
			</>
		);
	} else if (page === 1) {
		return (
			<>
				<EmailLogin
					setPage={setPage}
					setAuthType={setAuthType}
					authType={authType}
				/>
			</>
		);
	} else if (page === 2) {
		return (
			// phone number
			<>
				<Text>Enter your phone number</Text>
				<Input />
				<Button>Continue</Button>
			</>
		);
	} else if (page === 3) {
		// username
		<>
			<Text>Enter your username</Text>
			<Input />
			<Button>Continue</Button>
		</>;
	} else if (page === 4) {
		// email
		<>
			<Text>Enter your email</Text>
			<Input />
			<Button>Continue</Button>
		</>;
	} else if (page === 5) {
		// password
		<>
			<Input />
			<Button>Continue</Button>
		</>;
	}
};

export const TabSwitcher = ({ page, setPage }) => {
	return (
		<Box position="absolute" bottom="10">
			<Pressable onPress={() => setPage(page++)}>
				<Icon as={AntDesign} name="closecircleo" size="lg" />
			</Pressable>
		</Box>
	);
};

export const TermsConditions = () => {
	return (
		<>
			<Text fontSize="xs">
				By continuing you agree to out T&Cs. Please also check out our Privacy
				Policy.
			</Text>
			<Text fontSize="xs" mt="1">
				We use your data to offer you a personalised experience and to better
				understand and improve our services. For more information see here.
			</Text>
		</>
	);
};

export const EmailLogin = ({ authType, setAuthType, setPage }) => {
	const [data, setData] = useState(emailProviders);
	return (
		<>
			{data.map(function (item, i) {
				return (
					<EachEmailLogin
						setPage={setPage}
						authType={authType}
						setAuthType={setAuthType}
						item={item}
						key={i}
					/>
				);
			})}
		</>
	);
};

export const EachEmailLogin = ({ item, authType, setAuthType, setPage }) => {
	const { name, icon } = item;

	return (
		<>
			<Pressable
				onPress={() => {
					setAuthType(name);
					setPage(2);
				}}
			>
				<Box
					justifyContent="center"
					alignItems="center"
					shadow="1"
					bg="white"
					m="2"
					mt="2"
					w="100%"
					h="10"
				>
					<Text color="coolGray.800" bold>
						{name}
					</Text>
				</Box>
			</Pressable>
		</>
	);
};

export const FederationLogin = () => {
	const [data, setData] = useState(federationProviders);
	return (
		<VStack alignItems="center" w="100%">
			{data.map(function (item, i) {
				return <EachFederationLogin item={item} key={i} />;
			})}
		</VStack>
	);
};

export const EachFederationLogin = (item) => {
	const { name, icon } = item.item;

	return (
		<>
			<Box shadow="1" bg="white" m="2" mt="2" w="100%" h="10">
				<HStack px="2" alignItems="center" flex="1" space={3}>
					<Center>
						<Icon as={AntDesign} name={icon} />
					</Center>

					<VStack>
						<Text color="coolGray.800" bold>
							Sign in with {name}
						</Text>
					</VStack>
				</HStack>
			</Box>
		</>
	);
};

export default AuthenticationModal;
