import {
	Button,
	Box,
	VStack,
	HStack,
	Icon,
	Text,
	Input,
	ScrollView,
	Badge,
	Heading,
	Pressable,
	IconButton,
} from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import styles from "./HomeScreen.StyleSheet.js";
import * as Haptics from "expo-haptics";

export default function HomeScreen() {
	const navigation = useNavigation();

	const [tab, setTab] = useState("Instore");

	return (
		<Box bg="#ecf0f1" safeArea p="5">
			<TopBar />
			<TabSwitcher tab={tab} setTab={setTab} />
			<SearchBar />
			<TabView tab={tab} />
		</Box>
	);
}

export const RewardsView = () => {
	// rewards could be on the map showing who has rewards and how many
	// in addition to products
	return <></>;
};

export const ToYourDoorView = () => {
	return <></>;
};

export const InstoreView = () => {
	return (
		<>
			<ForYouSection />
			<GotoCameraButton />
			<QuickLinks />
		</>
	);
};

export const TabView = ({ tab }) => {
	return (
		<>
			{tab == "Instore" && <InstoreView />}
			{tab == "To your door" && <ToYourDoorView />}
			{tab == "To your door" && <RewardsView />}
		</>
	);
};

export const TabSwitcher = ({ tab, setTab }) => {
	function tabSetter(props) {
		Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light), setTab(props);
	}

	return (
		<HStack justifyContent="space-evenly" alignItems="center" mt="5">
			<Pressable
				style={tab === "Instore" ? styles.TabBody_Active : null}
				onPress={() => tabSetter("Instore")}
			>
				<Text
					fontFamily={"Manrope-Bold"}
					style={tab === "Instore" ? styles.TabText_Active : null}
				>
					Instore
				</Text>
			</Pressable>

			<Pressable
				style={tab === "To your door" ? styles.TabBody_Active : null}
				onPress={() => tabSetter("To your door")}
			>
				<Text
					fontFamily={"Manrope-Bold"}
					style={tab === "To your door" ? styles.TabText_Active : null}
				>
					To your door
				</Text>
			</Pressable>

			<Pressable
				style={tab === "Rewards" ? styles.TabBody_Active : null}
				onPress={() => tabSetter("Rewards")}
			>
				<Text
					fontFamily={"Manrope-Bold"}
					style={tab === "Rewards" ? styles.TabText_Active : null}
				>
					Rewards
				</Text>
			</Pressable>
		</HStack>
	);
};

export const QuickLinks = () => {
	const navigation = useNavigation();
	return (
		<Box>
			<Heading fontFamily={"Manrope-Bold"}>For you</Heading>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				_contentContainerStyle={{
					py: "5",
				}}
			>
				<Box mr="2" w="20" h="20" bg="white"></Box>
				<Box mr="2" w="20" h="20" bg="white"></Box>
				<Box mr="2" w="20" h="20" bg="white"></Box>
				<Box mr="2" w="20" h="20" bg="white"></Box>
				<Box mr="2" w="20" h="20" bg="white"></Box>
			</ScrollView>
		</Box>
	);
};

export const GotoCameraButton = () => {
	const navigation = useNavigation();
	const [CameraButtonStyle, setCameraButtonStyle] = useState(
		styles.CameraButtonBody_Default
	);
	return (
		<Pressable
			style={CameraButtonStyle}
			onPressIn={() => {
				setCameraButtonStyle(styles.CameraButtonBody_Pressed);
			}}
			onPressOut={() => {
				setCameraButtonStyle(styles.CameraButtonBody_Default);
			}}
			onLongPress={() => {
				Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
					navigation.navigate("Camera");
			}}
		>
			{/* {({ pressed }) => <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>} */}
			{/* // _pressed={{ */}
			{/* // 	bg: "primary.700",
			// 	py: "2",
			// 	px: "3",
			// }} */}

			<HStack
				shadow="1"
				mt="2"
				borderRadius="10"
				pl="7"
				pr="6"
				py="5"
				alignItems="center"
				justifyContent="space-between"
				mb="5"
				bg="white"
			>
				<VStack>
					<Text fontFamily={"Manrope-Bold"}>Go to the camera</Text>
					<Text fontFamily={"Manrope-Regular"} mt="1">
						Identify products using the camera.
					</Text>
				</VStack>

				<IconButton
					onPress={() => {
						Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
							navigation.navigate("Camera");
					}}
					ml="2"
					icon={<Icon as={AntDesign} name="rightcircle" />}
					borderRadius="full"
					_icon={{
						color: "black",
						size: "md",
					}}
				/>
			</HStack>
		</Pressable>
	);
};

export const ForYouSection = () => {
	const navigation = useNavigation();
	return (
		<Box>
			<Heading fontFamily={"Manrope-Bold"}>For you</Heading>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				_contentContainerStyle={{
					py: "5",
				}}
			>
				<Box mr="2" w="40" h="20" bg="white"></Box>
				<Box mr="2" w="40" h="20" bg="white"></Box>
				<Box mr="2" w="40" h="20" bg="white"></Box>
				<Box mr="2" w="30" h="20" bg="white"></Box>
				<Box mr="2" w="40" h="20" bg="white"></Box>
			</ScrollView>
		</Box>
	);
};

export const SearchBar = () => {
	const navigation = useNavigation();
	return (
		<HStack mt="5" mb="5" alignItems="center" justifyContent="space-between">
			<Input
				showSoftInputOnFocus={false}
				onPressIn={() => {
					navigation.push("Search");
				}}
				width="80%"
				placeholder="Search"
				variant="filled"
				borderRadius="10"
				py="2"
				px="2"
				borderWidth="0"
				InputLeftElement={
					<Icon
						ml="2"
						size="4"
						color="gray.400"
						as={<Ionicons name="ios-search" />}
					/>
				}
			/>
			<IconButton
				onPressIn={() => {
					navigation.push("SearchFilters");
				}}
				icon={<Icon as={AntDesign} name="ellipsis1" />}
				borderRadius="full"
				_icon={{
					color: "black",
					size: "md",
				}}
			/>
		</HStack>
	);
};

export const TopBar = () => {
	const navigation = useNavigation();

	const [user, setUser] = useState();

	return (
		<HStack alignItems="center" justifyContent="space-between">
			<Box>
				<IconButton
					onPress={() => {
						Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
							navigation.navigate("Camera");
					}}
					icon={<Icon as={AntDesign} name="camera" />}
					borderRadius="full"
					_icon={{
						color: "black",
						size: "md",
					}}
					// _hover={{
					//   bg: "orange.600:alpha.20",
					// }}
					// _pressed={{
					//   bg: "orange.600:alpha.20",
					//   _icon: {
					//     name: "emoji-flirt",
					//   },
					//   _ios: {
					//     _icon: {
					//       size: "2xl",
					//     },
					//   },
					// }}
					// _ios={{
					//   _icon: {
					//     size: "2xl",
					//   },
					// }}
				/>
			</Box>

			<Box>
				<Text fontFamily={"Manrope-ExtraBold"}>
					NN1 4LA <Text fontFamily={"Manrope-Light"}> 5KM</Text>
				</Text>
			</Box>

			<HStack>
				<IconButton
					onPressIn={() => {
						if (!user) {
							navigation.navigate("Authenticate");
						} else {
							navigation.navigate("MyFavourites");
						}
					}}
					mr="1"
					icon={<Icon as={AntDesign} name="heart" />}
					borderRadius="full"
					_icon={{
						color: "black",
						size: "md",
					}}
				/>
				<IconButton
					onPressIn={() => {
						if (!user) {
							navigation.navigate("Authenticate");
						} else {
							navigation.navigate("MyAccount");
						}
					}}
					icon={<Icon as={AntDesign} name="smileo" />}
					borderRadius="full"
					_icon={{
						color: "black",
						size: "md",
					}}
				/>
			</HStack>
		</HStack>
	);
};
