import { Flex, Box } from "@chakra-ui/react";
import SettingSidebar from "../SettingComponent/SettingSidebar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  box-sizing: border-box;
  background: #ffffff;
  border-right: 1px solid #d0d5dd;
  border-radius: 8px;
`;

const StyledBox = styled(Box)`
  background: #ffffff;
  border-radius: 8px;
`;

const SettingSidebarLayout = () => {
  return (
    <StyledFlex>
      <SettingSidebar />

      <StyledBox>
        <Outlet />
      </StyledBox>
    </StyledFlex>
  );
};

export default SettingSidebarLayout;
