import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import {
	NativeBaseProvider,
	Text,
	View,
	HStack,
	VStack,
	Spacer,
	Badge,
	SectionList,
} from "native-base";

const initialData = [
	{
		title: "Sunday 1st May - 2022",
		data: [
			{
				event_id: "1",
				name: "Womens Kickboxing",
				club_name: "Devils Martial Arts",
				duration: "60",
				spaces_booked: 10,
				event_limit: 20,
				timeStamp: "10:00",
				date: "2022-05-01 10:00:00.000000",
				description: "Ladies Only Kickboxing",
			},
			{
				event_id: "2",
				name: "Senior Devils 13yrs +",
				club_name: "Devils Martial Arts",
				duration: "45",
				spaces_booked: 5,
				event_limit: 20,
				timeStamp: "11:15",
				date: "2022-05-01 11:15:00.000000",
				description: "Padwork & Fitness",
			},
			{
				event_id: "3",
				name: "Senior Devils",
				club_name: "Devils Martial Arts",
				duration: "45",
				spaces_booked: 5,
				event_limit: 20,
				timeStamp: "14:00",
				date: "2022-05-01 11:15:00.000000",
				description: "Padwork & Fitness",
			},
		],
	},
	{
		title: "Monday 2nd May - 2022",
		data: [
			{
				id: "3",
				name: "Open Gym",
				club_name: "Devils Martial Arts",
				duration: "60",
				spaces_booked: 10,
				event_limit: 20,
				timeStamp: "13:00",
				date: "2022-05-02 13:00:00.000000",
				description: "Open Gym",
			},
			{
				id: "4",
				name: "Little Devils",
				club_name: "Devils Martial Arts",
				duration: "45",
				spaces_booked: 5,
				event_limit: 20,
				timeStamp: "15:00",
				date: "2022-05-02 15:00:00.000000",
				description: "Padwork & Fitness",
			},
		],
	},
	{
		title: "Tuesday 3rd May - 2022",
		data: [
			{
				id: "3",
				name: "Boxing",
				club_name: "Devils Martial Arts",
				duration: "60",
				spaces_booked: 10,
				event_limit: 20,
				timeStamp: "13:00",
				date: "2022-05-02 13:00:00.000000",
				description: "Open Gym",
			},
			{
				id: "4",
				name: "Little Devils",
				club_name: "Devils Martial Arts",
				duration: "45",
				spaces_booked: 5,
				event_limit: 20,
				timeStamp: "15:00",
				date: "2022-05-02 15:00:00.000000",
				description: "Padwork & Fitness",
			},
		],
	},
	{
		title: "Wednesday 4th May - 2022",
		data: [
			{
				id: "3",
				name: "Boxing",
				club_name: "Devils Martial Arts",
				duration: "60",
				spaces_booked: 10,
				event_limit: 20,
				timeStamp: "13:00",
				date: "2022-05-02 13:00:00.000000",
				description: "Open Gym",
			},
			{
				id: "4",
				name: "Little Devils",
				club_name: "Devils Martial Arts",
				duration: "45",
				spaces_booked: 5,
				event_limit: 20,
				timeStamp: "15:00",
				date: "2022-05-02 15:00:00.000000",
				description: "Padwork & Fitness",
			},
		],
	},
	{
		title: "Thursday 5th May - 2022",
		data: [
			{
				id: "3",
				name: "Sparring",
				club_name: "Devils Martial Arts",
				duration: "60",
				spaces_booked: 10,
				event_limit: 20,
				timeStamp: "13:00",
				date: "2022-05-02 13:00:00.000000",
				description: "Sparring Session",
			},
			{
				id: "4",
				name: "Little Devils",
				club_name: "Devils Martial Arts",
				duration: "45",
				spaces_booked: 5,
				event_limit: 20,
				timeStamp: "15:00",
				date: "2022-05-02 15:00:00.000000",
				description: "Padwork & Fitness",
			},
		],
	},
];

export default function AccountModal() {
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
							py="2"
						>
							<HStack space={3} justifyContent="space-between">
								<View>
									<Text
										bold
										fontSize="md"
										color="coolGray.800"
										textAlign={"center"}
									>
										{item.timeStamp}
									</Text>
									<Badge
										colorScheme="coolGray"
										_text={{
											fontSize: 12,
											color: "black",
										}}
									>
										{item.spaces_booked + " / " + item.event_limit}
									</Badge>
								</View>
								<VStack>
									<Text color="coolGray.800" bold>
										{item.name}
									</Text>
									<Text fontSize={12} color="coolGray.800">
										{item.duration} Mins
									</Text>
									<Text
										color="coolGray.600"
										_dark={{
											color: "warmGray.200",
										}}
									>
										{item.recentText}
									</Text>
								</VStack>
								<Spacer />
								<Badge
									colorScheme="success"
									alignSelf="flex-start"
									bg="cyan.500"
									_text={{
										fontSize: 12,
										color: "white",
									}}
								>
									Book Class
								</Badge>
							</HStack>
						</View>
					)}
					keyExtractor={(item, index) => item + index}
					stickySectionHeadersEnabled
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
