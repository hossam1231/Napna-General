import React from "react";
import {
  Box,
  FormControl,
  Input,
  IconButton,
  Modal,
  Button,
  HStack,
} from "native-base";
import { Fontisto } from "@expo/vector-icons";

export default function ActionNativeBaseModal() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.Body>
            <HStack alignItems={"center"}>
              <Fontisto name="search" size={24} color={"#9290A4"} />
              <FormControl>
                <Input
                  variant="unstyled"
                  placeholderTextColor={"#9290A4"}
                  placeholder="Type '?' to see available actions"
                  ref={initialRef}
                />
              </FormControl>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <HStack space="4" justifyContent="center" alignItems="center">
        <IconButton
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          icon={<Fontisto name="flash" size={24} color="#7B7991" />}
        />
      </HStack>
    </>
  );
}
