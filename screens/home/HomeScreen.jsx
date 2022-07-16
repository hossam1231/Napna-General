// react
import React, { useState, useEffect } from "react";
// nativebase
import {
	Text,
	HStack,
	Box,
	FlatList,
	Icon,
	IconButton,
	Center,
	Pressable,
	Heading,
	VStack,
	Switch,
	Badge,
} from "native-base";
// dummy data
import { DOL_Tiles } from "../../constants/home/DOL_Tiles";
import { SB_Tiles } from "../../constants/home/SB_Tiles";
import { S_Tiles_static, S_Tiles_toggle } from "../../constants/home/S_Tiles";
import { BAL_Tiles } from "../../constants/home/BAL_Tiles";
import { MA_Tiles } from "../../constants/home/MA_Tiles";
// icons
import { AntDesign, Ionicons } from "@expo/vector-icons";
// components
import PartialLineChart from "../../components/graphs/partialLineChart/App";
// screens
import { Loading } from "../loading/LoadingScreen";
// redux
import { useDispatch, useSelector } from "react-redux";
// db
// import { getItem } from "../../functions/db/AWS_GetItem";

const HomeScreen = () => {
	return (
		<HStack safeArea flex="1">
			<SideBar />
			<Display />
		</HStack>
	);
};

export const Display = () => {
	const [isLoadingComplete, setLoadingComplete] = useState(true);
	const { user, userID } = useSelector((state) => state.userReducer);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	async function loadUser() {
	// 		if (!user) {
	// 			const userDB = getItem({
	// 				params: {
	// 					TableName: "users",
	// 					Key: {
	// 						primaryKey: email,
	// 						sortKey: "6c8264f7-5ff4-4e51-ba74-03ff1e426b56",
	// 					},
	// 				},
	// 			});
	// 			const result = await userDB;
	// 			dispatch(setUser(result));
	// 		}
	// 		setLoadingComplete(true);
	// 	}
	// 	loadUser();
	// }, []);

	return (
		<Box flex="1">
			<TopBar />
			{isLoadingComplete ? (
				<HStack flex="1">
					<DateOverview />
					<OverView />
				</HStack>
			) : (
				<Loading
					backgroundColor={"#FAFAFE"}
					spinnerColor={"black"}
					textColor={"black"}
				/>
			)}
		</Box>
	);
};

export const DateOverview = () => {
	return (
		<Box p="10" bg="#FAFAFE" borderRightWidth="1" borderColor="#E7E8FC" w="309">
			<Text color="#7D7D7F" fontFamily="Manrope-Regular">
				Todays Stats
			</Text>
			<DateOverviewList />
		</Box>
	);
};

export const DateOverviewList = () => {
	const [data, setData] = useState(DOL_Tiles);

	return (
		<FlatList
			showVerticalScrollIndicator="false"
			data={data}
			renderItem={({ item }) => (
				<Box
					key={item.id}
					mt="5"
					borderRadius="10"
					bg="white"
					h="109"
					pl="4"
					pr="5"
					py="5"
					px="2"
				>
					<HStack space={3} justifyContent="space-between">
						<Box>
							<Text fontFamily="Manrope-Regular">Todays {item.title}</Text>
							<Text fontFamily="Manrope-ExtraBold" fontSize="xl" bold>
								{item.quantity}
							</Text>
						</Box>
						<Box>
							<Box>{/* mini graph */}</Box>
							<HStack>
								<Text
									fontFamily="Manrope-Regular"
									color={item.unit == "positive" ? "#35DC94" : "#FE2762"}
								>
									{item.change}
								</Text>

								{item.unit == "positive" ? (
									<Icon
										as={AntDesign}
										name="arrowup"
										color="#35DC94"
										size="sm"
									/>
								) : (
									<Icon
										as={AntDesign}
										name="arrowdown"
										color="#FE2762"
										size="sm"
									/>
								)}
							</HStack>
						</Box>

						{/* <Spacer /> */}
					</HStack>
				</Box>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export const OverView = () => {
	return (
		<Box p="10" bg="white" flex="1">
			<VStack>
				<HStack justifyContent="space-between">
					<OverViewStatus />
					<OverViewBalances />
				</HStack>
				<Box borderTopWidth="1" borderColor="#E7E8FC" />
				<HStack mt="10">
					<OverViewActivity />
					<OverViewStatistics />
				</HStack>
			</VStack>
		</Box>
	);
};

export const OverViewStatus = () => {
	return (
		<Box>
			<Text bold fontSize="xl" fontFamily="Manrope-Regular">
				Service status
			</Text>
			<OverViewStatusList />
		</Box>
	);
};

export const OverViewStatusList = () => {
	const [staticData, setStaticData] = useState(S_Tiles_static);
	const [toggleData, setToggleData] = useState(S_Tiles_toggle);

	return (
		<HStack>
			<VStack mr="20">
				<FlatList
					mt="10"
					data={toggleData}
					renderItem={({ item }) => (
						<HStack key={item.id} mb="10">
							<HStack alignItems="center">
								<Center bg={item.color} h="20" w="20" borderRadius="10" mr="5">
									<Icon
										color="white"
										as={AntDesign}
										name={item.icon}
										size="lg"
									/>
								</Center>

								<VStack w="20" mr="5">
									<Text bold fontFamily="Manrope-Regular">
										{item.title}
									</Text>
									<Text
										mt="2"
										fontFamily="Manrope-Regular"
										color={item.status == true ? "#35DC94" : "#FE2762"}
									>
										{item.status == true ? "Running..." : "Stopped"}
									</Text>
								</VStack>
								<Box>
									<Switch />
								</Box>
							</HStack>

							{/* <Box w="4" bg="black" h="35"></Box> */}
							{/* 
							<Icon as={AntDesign} name={item.icon} size="lg" /> */}
						</HStack>
					)}
					keyExtractor={(item) => item.id}
				/>
			</VStack>
			<VStack>
				<FlatList
					mt="10"
					data={staticData}
					renderItem={({ item }) => (
						<HStack key={item.id} mb="10">
							<HStack alignItems="center">
								<Center bg={item.color} h="20" w="20" borderRadius="10" mr="5">
									<Icon
										as={AntDesign}
										color="white"
										name={item.icon}
										size="lg"
									/>
								</Center>

								<VStack>
									<Text bold fontFamily="Manrope-Regular">
										{item.title}
									</Text>
									<Text mt="2" fontFamily="Manrope-Regular">
										{item.description}
									</Text>
								</VStack>
							</HStack>

							{/* <Box w="4" bg="black" h="35"></Box> */}
							{/* 
							<Icon as={AntDesign} name={item.icon} size="lg" /> */}
						</HStack>
					)}
					keyExtractor={(item) => item.id}
				/>
			</VStack>
		</HStack>
	);
};

export const OverViewBalances = () => {
	return (
		<HStack>
			<Box>
				<Text bold fontSize="xl" fontFamily="Manrope-Regular">
					My Balances
				</Text>
				<OverViewBalancesList />
			</Box>

			<HStack>
				<Box mr="2">
					<IconButton
						icon={<Icon as={AntDesign} name="piechart" color="#CBCBCC" />}
					/>
				</Box>
				<Box>
					<IconButton
						icon={<Icon as={AntDesign} name="plus" color="#CBCBCC" />}
					/>
				</Box>
			</HStack>
		</HStack>
	);
};

export const OverViewBalancesList = () => {
	const [data, Data] = useState(BAL_Tiles);

	return (
		<HStack>
			<FlatList
				mt="10"
				data={data}
				renderItem={({ item }) => (
					<Box
						key={item.id}
						bg="#B9A1F8"
						borderRadius="10"
						w="167"
						h="201.72"
						mb="10"
					>
						<VStack flex="1" p="5">
							<HStack alignItems="Center">
								<Text mr="2" fontFamily="Manrope-ExtraBold" fontSize="lg">
									£
								</Text>
								<Text fontFamily="Manrope-Regular">{item.title}</Text>
							</HStack>

							<Text
								fontFamily="Manrope-ExtraBold"
								fontSize="2xl"
								color={item.overdue == false ? "#35DC94" : "#FE2762"}
							>
								{item.quantity}
							</Text>

							<Box
								my="2"
								w="100%"
								style={{
									borderStyle: "dotted",
									borderWidth: 0.5,
									borderRadius: 0.5,
								}}
							/>

							<Badge mt="1" colorScheme={item.automatic ? "success" : ""}>
								Automatic
							</Badge>
						</VStack>

						{/* <Box w="4" bg="black" h="35"></Box> */}
						{/* 
							<Icon as={AntDesign} name={item.icon} size="lg" /> */}

						<HStack alignItems="center" p="5" justifyContent="space-between">
							<Box>
								<Icon
									as={Ionicons}
									name="card-sharp"
									color={item.card == true ? "#404040" : ""}
									size="lg"
								/>
							</Box>

							<Box>
								<IconButton
									icon={
										<Icon as={AntDesign} name="pluscircleo" color="#404040" />
									}
								/>
							</Box>
						</HStack>
					</Box>
				)}
				keyExtractor={(item) => item.id}
			/>
		</HStack>
	);
};

export const OverViewActivity = () => {
	return (
		<Box h="389">
			<Text bold fontSize="xl" fontFamily="Manrope-Regular">
				Mailing Activity
			</Text>
			<OverViewActivityList />
		</Box>
	);
};

export const OverViewActivityList = () => {
	const [data, setData] = useState(MA_Tiles);

	return (
		<FlatList
			mt="5"
			data={data}
			renderItem={({ item }) => (
				<HStack
					key={item.id}
					px="5"
					borderLeftWidth="1"
					borderRightWidth="1"
					borderRadius="10"
					borderColor="#9E73EA"
					mt="5"
					alignItems="center"
					w="300"
					h="51"
				>
					{/* <Box mr="5" h="51" w="1" borderRadius="10" bg="black"></Box> */}
					<VStack flex="1">
						<Text fontFamily="Manrope-Bold">{item.title}</Text>
						<HStack alignItems="center" justifyContent="space-between">
							<Text fontFamily="Manrope-Light">
								Available {item.quantity}
								{/* <Text fontFamily="Manrope-Light">/</Text> */}
								<Text ml="4" fontFamily="Manrope-Light" bold sub>
									<Text mr="1">Used</Text> {item.uses}
								</Text>
							</Text>
							<Text fontFamily="Manrope-ExtraBold" mr="5">
								<Text mx="2" fontFamily="Manrope-Regular">
									{item.signUps}
								</Text>
								|
								<Text mx="2" fontFamily="Manrope-Regular">
									{item.unsuscribes}
								</Text>
							</Text>
						</HStack>
					</VStack>

					<Box>
						<Icon as={AntDesign} name="right" size="lg" />
					</Box>
				</HStack>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export const OverViewStatistics = () => {
	return (
		<HStack flex="1">
			<Box>
				<Text bold fontSize="xl" fontFamily="Manrope-Regular">
					Statistics
				</Text>
				<OverViewStatisticsPicker />
				<OverViewSatisticsGraph />
			</Box>
		</HStack>
	);
};

export const OverViewSatisticsGraph = () => {
	return (
		<>
			<PartialLineChart />
		</>
	);
};

export const OverViewStatisticsPicker = () => {
	const [selected, setSelected] = useState("Day");
	return (
		<HStack w="50" h="20">
			<Pressable mr="2" onPressIn={() => setSelected("Day")}>
				<Center
					bg={selected == "Day" ? "#9E73EA" : ""}
					w="15"
					h="5"
					borderRadus="10"
				>
					<Text
						color={selected == "Day" ? "white" : ""}
						fontFamily="Manrope-Regular"
					>
						Day
					</Text>
				</Center>
			</Pressable>

			<Pressable mr="2" onPressIn={() => setSelected("Week")}>
				<Center
					bg={selected == "Week" ? "#9E73EA" : ""}
					w="15"
					h="5"
					borderRadus="10"
				>
					<Text
						color={selected == "Week" ? "white" : ""}
						fontFamily="Manrope-Regular"
					>
						Week
					</Text>
				</Center>
			</Pressable>

			<Pressable mr="2" onPressIn={() => setSelected("Month")}>
				<Center
					bg={selected == "Month" ? "#9E73EA" : ""}
					w="15"
					h="5"
					borderRadus="10"
				>
					<Text
						color={selected == "Month" ? "white" : ""}
						fontFamily="Manrope-Regular"
					>
						Months
					</Text>
				</Center>
			</Pressable>
		</HStack>
	);
};

export const OverViewUsage = () => {
	return <></>;
};

export const TopBar = () => {
	return (
		<HStack
			alignItems="center"
			borderBottomWidth="1"
			borderColor="#E7E8FC"
			justifyContent="space-between"
			h="60"
			bg="white"
		>
			<Box ml="10">
				<Text bold fontFamily="Manrope-Regular">
					Dashboard
				</Text>
			</Box>

			<HStack mr="10">
				<Box mr="1">
					<Icon as={AntDesign} name="heh" size="lg" />
				</Box>

				<Box mr="1">
					<Icon as={AntDesign} name="hehe" size="lg" />
				</Box>

				<Box mr="1">
					<Icon as={AntDesign} name="smileo" size="lg" />
				</Box>
			</HStack>
		</HStack>
	);
};

export const SideBar = () => {
	return (
		<VStack
			bg="white"
			borderRightWidth="1"
			borderColor="#E7E8FC"
			alignItems="center"
			w="101"
		>
			<Center h="60">
				<Heading position="relative" bottom="0">
					H
				</Heading>
			</Center>

			<SideBarList />

			<Box position="absolute" bottom="10">
				<Icon as={AntDesign} name="setting" size="lg" />
			</Box>
		</VStack>
	);
};

export const SideBarList = () => {
	const [data, setData] = useState(SB_Tiles);

	return (
		<FlatList
			mt="20"
			data={data}
			renderItem={({ item }) => (
				<HStack key={item.id} p="10" h="35">
					{/* <Box w="4" bg="black" h="35"></Box> */}

					<Icon as={AntDesign} name={item.icon} size="lg" />
				</HStack>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default HomeScreen;
