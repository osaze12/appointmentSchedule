import { Button } from "@chakra-ui/button";
import { Flex, Text, HStack } from "@chakra-ui/layout";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export const CustomToolbar = (props) => {

     const navigate = (action) => {

       props.onNavigate(action);
     };
    return (
      <>
        <HStack spacing="20px" my="15px" alignItems="center">
          <Button
            variant="ghost"
            size="xs"
            type="button"
            onClick={() => navigate("TODAY")}
          >
            Today
          </Button>
          <Flex>
            <HiChevronLeft
              fontSize=".6em"
              cursor="pointer"
              className="arrow"
              onClick={() => navigate("PREV")}
            />
            <HiChevronRight
              cursor="pointer"
              className="arrow"
              onClick={() => navigate("NEXT")}
            />
          </Flex>

          <Text fontWeight="medium">{props.label}</Text>
        </HStack>
      </>
    );
}