import { Box, Flex } from "@chakra-ui/layout";
import { useState } from "react";

export const CalendarTab = () => {
  const [active, setActive] = useState(1);
  const handleClick = (id) => {
    setActive(id);
  };
  return (
    <Flex className="tab-container">
      <Box
        cursor="pointer"
        onClick={() => handleClick(1)}
        className={`tab tab-${active === 1 && "active"}`}
      >
        Day
      </Box>
      <Box
        cursor="pointer"
        onClick={() => handleClick(2)}
        className={`tab tab-${active === 2 && "active"}`}
      >
        Week
      </Box>
    </Flex>
  );
};
