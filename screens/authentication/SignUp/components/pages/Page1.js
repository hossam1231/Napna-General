//  react
import React, { useEffect, useState } from "react";
// nativebase
import {
	HStack,
	InputGroup,
	InputLeftAddon,
	Input,
	Text,
	useColorModeValue,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import ProceedButton from "./ProceedButton";
import { useDispatch } from "react-redux";

const Page1 = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const dispatch = useDispatch()
	useEffect(() => {
		if (phoneNumber) {
			if (phoneNumber.length > 11) {
			dispatch(setUserID(pho))
				});
			}
		}
	}, [phoneNumber]);

	return (
		<HStack flex="1" alignItems="center">
			<InputGroup
				h="10"
				w={{
					base: "100%",
					md: "100%",
				}}
			>
				<InputLeftAddon>
					<Text fontFamily="Manrope-ExtraBold">+44</Text>
				</InputLeftAddon>
				<Input
					isRequired
					// label="Phone number"
					labelColor="#9ca3af"
					labelBGColor={useColorModeValue("#fff", "#1f2937")}
					borderRadius="4"
					defaultValue={phoneNumber}
					onChangeText={(txt) => setPhoneNumber("+44" + txt)}
					_text={{
						fontSize: "sm",
						fontWeight: "medium",
					}}
					_dark={{
						borderColor: "coolGray.700",
					}}
					_light={{
						borderColor: "coolGray.300",
					}}
					flex="1"
				/>
			</InputGroup>
		</HStack>
	);
};

export default Page1;
