import { Box, Text, Image } from "@chakra-ui/react";
import Phone from "../Images/phone.svg";

const Sidebar = () => {
  return (
    <Box
      mt="10px"
      w="280px"
      h="64px"
      borderRadius="5px"
      bg="white"
      boxShadow="0px 1px 0px rgba(0, 0, 0, 0.25), inset -1px 0px 0px rgba(0, 0, 0, 0.25)"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      px="16px"
    >
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Text
          fontFamily="Open Sans"
          fontWeight="700"
          fontSize="20px"
          lineHeight="30px"
          color="#344054"
          bg="white"
          width="180px"
          height="44px"
        >
          Oregon Region
        </Text>
        <Text
          fontFamily="Open Sans"
          fontWeight="500"
          fontSize="14px"
          width="180px"
          lineHeight="20px"
          color="#344054"
          bg="white"
        >
          $114.45
        </Text>
      </Box>
      <Image
        src={Phone}
        alt="Phone"
        border="2px solid #ffffff"
        backgroundColor="#ffffff"
        mt="10px"
      />
    </Box>
  );
};

export default Sidebar;
