import { Outlet } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import { Flex, Box } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <Flex w="100%" gap={5}>
      <Box w="60px">
        <ProfileBar />
      </Box>
      <Box w="290px">
        <Sidebar />
      </Box>
      <Box flexGrow="1">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default RootLayout;
