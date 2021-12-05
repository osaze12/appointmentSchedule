import { useDisclosure } from "@chakra-ui/react";
import { Box, Flex, Stack, Text, Tooltip } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import dayjs from "dayjs";
import { ViewAppointmentDetailsModal } from "./AppointmentDetailsModal";

export const ViewAppointmentDetails = (props) => {
  const { empty, type, patient, start, end } = props;
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <>
      <Box>
        {empty ? (
          <Text>Add Information</Text>
        ) : (
          <Box p="5px">
            <Stack spacing="10px">
              <Flex justifyContent="space-between">
                <Text color="#b3b3b3" fontSize="1.2em">
                  {dayjs(start).format("hh:mm")} - {dayjs(end).format("hh:mm")}
                </Text>
                <Tooltip label="More info">
                  <Box>
                    <BsThreeDotsVertical onClick={onOpen} />
                  </Box>
                </Tooltip>
              </Flex>
              <Text fontSize="1.5em">
                <b>{patient}</b>
              </Text>
              <Text fontSize="1.5em" color="#b3b3b3">
                {type}
              </Text>
            </Stack>
          </Box>
        )}
      </Box>

      <ViewAppointmentDetailsModal
        {...props}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};
