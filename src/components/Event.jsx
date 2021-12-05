import { Box } from "@chakra-ui/layout";

import { ViewAppointmentDetails } from "./ViewAppointmentDetails";

export const Event = ({ event }) => {
  const editProps = {
    ...event,
  };
  return (
    <Box className="event-container">
      <ViewAppointmentDetails {...editProps} />
    </Box>
  );
};
