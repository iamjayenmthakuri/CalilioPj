import { Flex, Box } from "@chakra-ui/react";
import SettingSidebar from "../SettingComponent/SettingSidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  box-sizing: border-box;
  background: #ffffff;
  border-right: 1px solid #d0d5dd;
  border-radius: 8px;
  width: 100%;
  gap: 0.7px;
`;

const StyledBox = styled(Box)`
  background: #ffffff;
  border-radius: 0 8px 8px 0;
  flex-grow: 1;
`;

const SettingSidebarLayout = () => {
  return (
    <StyledFlex bg={" #5964ff"}>
      <Box>
        <SettingSidebar />
      </Box>

      <StyledBox w={"10%"}>
        <Outlet />
      </StyledBox>
    </StyledFlex>
  );
};

export default SettingSidebarLayout;
