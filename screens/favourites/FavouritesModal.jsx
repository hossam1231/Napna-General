import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {
	NativeBaseProvider,
	Box,
	Text,
	View,
	HStack,
	VStack,
	Center,
	Icon,
	Spacer,
	Badge,
	SectionList,
	ChevronRightIcon,
} from "native-base";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

var numberOfAvailablePlaces = 2;

var numberOfUnavailablePlaces = 1;

const initialData = [
	{
		title: "Recently added",
		data: [
			{
				event_id: "1",
				icon: "shoppingcart",
				name: "My orders",
			},
			{
				event_id: "2",
				icon: "hearto",
				name: "Favourites",
			},
		],
	},
	{
		title: numberOfAvailablePlaces + " " + "Available places ",
		data: [
			{
				id: "3",
				icon: "meh",
				name: "My details",
			},
		],
	},
	{
		title: numberOfUnavailablePlaces + " " + "Closed places ",
		data: [
			{
				id: "3",
				icon: "meh",
				name: "My details",
			},
		],
	},
];

export default function FavouritesModal() {
	const [data, setData] = useState(initialData);

	return (
		<NativeBaseProvider>
			<View style={styles.container}>
				<SectionList
					sections={data}
					ListEmptyComponent={
						<Text bold fontSize="md" color="coolGray.800" textAlign={"center"}>
							No classes found.
						</Text>
					}
					renderSectionHeader={({ section: { title } }) => (
						<View
							borderBottomWidth="1"
							borderColor="coolGray.200"
							bgColor={"coolGray.100"}
							pl="4"
							pr="5"
							py="2"
						>
							<Text bold fontSize={"md"}>
								{title}
							</Text>
						</View>
					)}
					renderItem={({ item }) => (
						<View
							borderBottomWidth="1"
							borderColor="coolGray.200"
							pl="4"
							pr="5"
							py="5"
							px="2"
						>
							<HStack space={3} justifyContent="space-between">
								<Center>
									<Icon as={AntDesign} name={item.icon} />
								</Center>

								<VStack>
									<Text color="coolGray.800" bold>
										{item.name}
									</Text>
								</VStack>

								<Center right="0" position="absolute">
									<Icon as={AntDesign} name="right" />
								</Center>

								<Spacer />
							</HStack>
						</View>
					)}
					keyExtractor={(item, index) => item + index}
				/>
			</View>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
});
