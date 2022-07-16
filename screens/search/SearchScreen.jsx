import { Box, Icon, Text, IconButton, Center, HStack } from "native-base";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../../components/search/SearchBar";

const SearchScreen = () => {
	return (
		<Box safeArea flex="1">
			<SearchSegment />
			<ResultsBox />
			<ToCamera />
		</Box>
	);
};

export const ToCamera = () => {
	return (
		<Box p="2">
			<Text fontFamily={"Manrope-ExtraBold"}>Saw something in real life?</Text>
			<Text fontFamily={"Manrope-Regular"}>
				Upload a photo or go to the camera to get started.
			</Text>
			<HStack>
				<Center
					justifyContent={"space-evenly"}
					borderRadius="5"
					mt="2"
					py="1"
					mr="2"
					bg="black"
					w="100"
					h="75"
				>
					<Icon as={AntDesign} name="camera" size="md" />
					<Text fontFamily={"Manrope-Light"} color="white">
						Camera
					</Text>
				</Center>

				<Center
					justifyContent={"space-evenly"}
					borderRadius="5"
					mt="2"
					py="1"
					mr="2"
					bg="black"
					w="100"
					h="75"
				>
					<Icon as={AntDesign} name="upload" size="md" />
					<Text fontFamily={"Manrope-Light"} color="white">
						Upload
					</Text>
				</Center>
			</HStack>
		</Box>
	);
};

export const ResultsBox = () => {
	return (
		<Box flex="1">
			<Center flex="1">
				<Icon as={Ionicons} name="search" />
				<Text mt="2" fontFamily={"Manrope-Light"}>
					You have no recent searches
				</Text>
			</Center>
		</Box>
	);
};

export const SearchSegment = () => {
	const navigation = useNavigation();
	return (
		<HStack justifyContent="space-between" alignItems="center">
			<IconButton
				ml="2"
				icon={<Icon as={AntDesign} name="leftcircle" />}
				borderRadius="full"
				_icon={{
					color: "black",
					size: "md",
				}}
			/>
			<SearchBar />
		</HStack>
	);
};

export default SearchScreen;
