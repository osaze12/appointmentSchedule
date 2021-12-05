import { Box, Flex, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import randomColor from "randomcolor";
import { memo } from "react"; 

export const Doctors = memo(function Doctors({ name, url }) {
  const bg = randomColor({ luminosity: "light" });

  return (
    <Box display="flex" m="5px">
      <Flex
        padding="5px 8px"
        borderRadius="30px"
        background={bg}
        alignItems="center"
        justifyContent="space-between"
        w="150px"
      >
        <Flex mr="70px" alignItems="center">
          <Avatar
            position="initial"
            size="2xs"
            name="Ryan Florence"
            src={url}
          />
          <Text ml="3px" fontSize="md" fontWeight="bold">
            <small>{name}</small>
          </Text>
        </Flex>

        <HiOutlineDotsVertical fontSize=".8em" />
      </Flex>
    </Box>
  );
});
