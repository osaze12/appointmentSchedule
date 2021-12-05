import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Box, Stack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";

export const ViewAppointmentDetailsModal = (props) => {
  const { type, patient, doctor, note, start, end, isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <b>{type}</b>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            color="#fff"
            borderRadius="5px"
            textAlign="center"
            bg="#7ba4ff"
            ml="-6"
            mr="-6"
            p="10px"
            py="50px"
            display="flex"
            justifyContent="center"
          >
            <Text fontWeight="bold" fontSize="1.5em">
              {dayjs(start).format("DD MMM YYYY")},<br />
              {dayjs(start).format("hh:mm A")}-{dayjs(end).format("hh:mm A")}
            </Text>
          </Box>
          <Stack spacing="10px" mt="5px">
            <Box>
              <Text color="#b9b9b9">
                <small>Patient</small>
              </Text>
              <Text fontWeight="bold" fontSize="2em">
                {patient}
              </Text>
            </Box>
            <Box>
              <Text color="#b9b9b9">
                <small>Note</small>
              </Text>
              <Text maxW="300px">{note ? note : "No Note..."}</Text>
            </Box>

            <Box>
              <Text>Doctor</Text>
              <Text fontWeight="bold">
                <small>{doctor}</small>
              </Text>
            </Box>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
