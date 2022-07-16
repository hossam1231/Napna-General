import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

const initialData = [
	{
		title: "",
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
		title: "",
		data: [
			{
				id: "3",
				icon: "meh",
				name: "My details",
			},
		],
	},
	{
		title: "",
		data: [
			{
				id: "3",
				icon: "creditcard",
				name: "Payment methods",
			},
			{
				id: "4",
				icon: "pushpino",
				name: "Saved adresses",
			},
			{
				id: "5",
				icon: "phone",
				name: "Contact prefrences",
			},
		],
	},
	{
		title: "",
		data: [
			{
				id: "6",
				icon: "gift",
				name: "Vouchers and credit",
			},
		],
	},
	{
		title: "",
		data: [
			{
				id: "7",
				icon: "delete",
				name: "Delete account",
			},
		],
	},
	{
		title: "",
		data: [
			{
				id: "8",
				icon: "team",
				name: "FAQs",
			},
			{
				id: "9",
				icon: "bulb1",
				name: "About",
			},
			{
				id: "10",
				icon: "logout",
				name: "Log out",
			},
		],
	},
];

export default function AccountModal() {
	const navigation = useNavigation();

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
