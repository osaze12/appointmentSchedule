import { Box } from "@chakra-ui/layout";
import { CalendarTable } from "./components/CalendarTable";

export const Calendar = () => {
  return (
    <Box overflow="auto" whiteSpace="nowrap">
      <CalendarTable />
    </Box>
  );
};
