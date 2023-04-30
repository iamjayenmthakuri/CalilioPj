import { Outlet } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <Flex w="100%" gap={2}>
      <Box w="60px">
        <ProfileBar />
      </Box>
      <Box w="290px">
        <Sidebar />
      </Box>
      <Box
        flexGrow="1"
        backgroundColor={"white"}
        margin={"8px"}
        borderRadius={"8px"}
      >
        <Outlet />
      </Box>
    </Flex>
  );
};

export default RootLayout;
