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
import activeprofile from "../Images/activeprofile.svg";
import { ChevronDownIcon, AddIcon } from "@chakra-ui/icons";
import {
  toggleHideModeState,
  hideModeState,
  toggleSecondHideModeState,
  secondHideState,
} from "../helpers/GobalState";
import { useRecoilValue, useSetRecoilState } from "recoil";

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

const StyledIcon = styled(ChevronDownIcon)`
  &:hover {
    color: #000000;
    cursor: pointer;
  }
  &:active {
    transform: rotate(180deg);
  }
`;
const Wrapper = styled.div`
  display: "flex";
  background-color: white;
  justify-content: center;

  align-items: "center";
  &:active ${StyledIcon} {
    transform: rotate(180deg);
  }
  &:hover ${StyledIcon} {
    color: #000000;
    cursor: pointer;
  }
`;

function HeroSection() {
  const isHideModeEnabaled = useRecoilValue(hideModeState);
  const isSecondHideModeEnabaled = useRecoilValue(secondHideState);

  const toggleHideMode = useSetRecoilState(toggleHideModeState);
  const toggleSecondHideMode = useSetRecoilState(toggleSecondHideModeState);

  return (
    <StyledBox
      width=" 280px"
      height=" 992px"
      bgColor="white"
      padding="2rem"
      marginBottom="8px"
    >
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
          <Wrapper>
            <StyledIcon
              w="18px"
              backgroundColor="white"
              onClick={toggleHideMode}
            />
            <Text
              w="200px"
              backgroundColor="white"
              fontWeight="600"
              pl="2px"
              onClick={toggleHideMode}
            >
              Numbers
            </Text>
          </Wrapper>
          <AddIcon w="15px" backgroundColor="white" />
        </Flex>
        {isHideModeEnabaled ? (
          <SimpleGrid
            transition="height 0.9s ease-in-out"
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
        ) : null}
        <Flex
          w="100%"
          align="center"
          color="rgba(52, 64, 84, 1)"
          backgroundColor="white"
          marginTop="26px"
        >
          {" "}
          <Wrapper>
            <StyledIcon
              w="18px"
              backgroundColor="white"
              onClick={toggleSecondHideMode}
            />
            <Text
              w="200px"
              backgroundColor="white"
              fontWeight="600"
              pl="2px"
              onClick={toggleSecondHideMode}
            >
              Members
            </Text>
          </Wrapper>
          <AddIcon w="15px" backgroundColor="white" />
        </Flex>
      </Box>
      {isSecondHideModeEnabaled ? (
        <Flex
          gap="10px"
          marginTop="20px"
          align="center"
          backgroundColor="white"
        >
          <Image src={activeprofile} backgroundColor="white" />
          <Text fontSize="13px" fontWeight="500" backgroundColor="white">
            Olivia Maiden Rhye (You){" "}
          </Text>
        </Flex>
      ) : null}
    </StyledBox>
  );
}

export default HeroSection;
