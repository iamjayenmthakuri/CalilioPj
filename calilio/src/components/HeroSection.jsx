import { Box, List, ListItem, Image, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../Images/dashbord.svg";
import Contacts from "../Images/Contacts.svg";
import setting from "../Images/setting.svg";
import sms from "../Images/sms.svg";

const StyledFlex = styled(Flex)`
  align-items: center;
  gap: 10px;
  background-color: white;
  height: 36px;
  padding: 4px;
  &:hover {
    background-color: #c2bfbf;
  }
  &:active {
    background-color: #2c4b27;
  }
`;

const StyledLink = styled(Link)`
  color: #667085;
  font-style: normal;
  font-weight: 600;
  height: 20px;
  &:hover {
    color: #141212;
  }
`;

const StyledBox = styled(Box)`
  background: #ffffff;
  margin-top: 8px;
  box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

function HeroSection() {
  return (
    <StyledBox width=" 280px" height="88vh" bgColor="white" padding="2rem">
      <List>
        <ListItem>
          <StyledFlex>
            <Image src={Dashboard} background={"white"} />
            <StyledLink to="/">Dashboard</StyledLink>
          </StyledFlex>
        </ListItem>

        <ListItem>
          <StyledFlex>
            <Image src={Contacts} background={"white"} />
            <StyledLink to="/contact">Contacts</StyledLink>
          </StyledFlex>
        </ListItem>

        <ListItem>
          <StyledFlex>
            <Image src={setting} background={"white"} />
            <StyledLink to="/setting">Setting</StyledLink>
          </StyledFlex>
        </ListItem>

        <ListItem>
          <StyledFlex>
            <Image src={sms} background={"white"} />
            <StyledLink to="/bulksms">Bulk sms</StyledLink>
          </StyledFlex>
        </ListItem>
      </List>
    </StyledBox>
  );
}

export default HeroSection;
