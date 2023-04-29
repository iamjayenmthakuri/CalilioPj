/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  List,
  ListItem,
  Image,
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../Images/dashbord.svg";
import Contacts from "../Images/Contacts.svg";
import setting from "../Images/setting.svg";
import sms from "../Images/sms.svg";
import Phone from "../Images/chat.svg";
import activeprofile from "../activeprofie.svg";

import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";

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
  background-color: white;
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
      <Box background="white">
        <Flex
          w="100%"
          align="center"
          color="rgba(52, 64, 84, 1)"
          backgroundColor="white"
          marginTop="24px"
        >
          <ChevronDownIcon w="18px" backgroundColor="white" />
          <Text w="200px" backgroundColor="white" fontWeight="600" pl="2px">
            Numbers
          </Text>
          <AddIcon w="15px" backgroundColor="white" />
        </Flex>
        <SimpleGrid
          outline=" 1.5px solid #e4e1e1"
          borderRadius=" 8px "
          marginTop="18px"
          height="100px"
          minChildWidth="220px"
          placeItems={"center"}
          backgroundColor="white"
        >
          <Image src={Phone} backgroundColor="white" />
          <Text
            fontSize="12px"
            backgroundColor="white"
            color="#667085"
            fontWeight="400px"
          >
            You don't have any numbers in this
          </Text>
          <Text
            fontSize="12px"
            backgroundColor="white"
            color="#667085"
            fontWeight="400px"
          >
            workspace.
            <Text as="span" color="blue" backgroundColor="white">
              Purchase Number
            </Text>
          </Text>
        </SimpleGrid>
        <Flex
          w="100%"
          align="center"
          color="rgba(52, 64, 84, 1)"
          backgroundColor="white"
          marginTop="26px"
        >
          <ChevronDownIcon w="18px" backgroundColor="white" />
          <Text w="200px" backgroundColor="white" fontWeight="600" pl="2px">
            Members
          </Text>
          <AddIcon w="15px" backgroundColor="white" />
        </Flex>
      </Box>
      <Image src={activeprofile} />
    </StyledBox>
  );
}

export default HeroSection;
