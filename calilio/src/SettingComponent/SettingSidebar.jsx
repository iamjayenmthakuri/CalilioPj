import {
  Image,
  List,
  ListItem,
  Flex,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Dashboard from "../Images/dashbord.svg";
import Setting from "../Images/setting.svg";
import sms from "../Images/sms.svg";
import Contacts from "../Images/contacts.svg";
import userPlus from "../Images/userplus.svg";

const StyledText = styled(Text)`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #101828;
  background-color: white;
`;

const StyledImage = styled(Image)`
  size-adjust: 10px;
`;

const StyledButton = styled(Button)`
  width: 210px;

  &:hover ${StyledImage} {
    background-color: var(--chakra-colors-gray-200);
  }
`;

const StyledFlex = styled(Flex)`
  align-items: center;
  gap: 11px;
  justify-content: flex-start;
  background-color: #ffffff;

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

const SettingSidebar = () => {
  return (
    <SimpleGrid
      backgroundColor={"white"}
      gap={6}
      padding={3}
      borderRadius={"8px 0 0 0"}
    >
      <Flex bg={"white"} gap={2} alignItems={"center"}>
        <StyledText fontWeight={700}>Settings</StyledText>
        <Image src={Setting} bg={"white"} />
      </Flex>
      <SimpleGrid
        placeItems={"left"}
        backgroundColor={"white"}
        gap={7}
        paddingLeft={6}
      >
        <Flex flexDirection={"column"} gap={3} backgroundColor={"white"}>
          <Text bg={"white"} fontWeight={600}>
            User Settings
          </Text>
          <Flex
            borderRadius={"8px"}
            alignItems={"center"}
            justifyContent={"left"}
          >
            <StyledButton color={"white"} gap={2} bg={"#5964FF"} fontSize={18}>
              <StyledImage src={userPlus} />
              My Account
            </StyledButton>
          </Flex>
        </Flex>
        <List spacing={2} bg={"white"}>
          <Text bg={"white"} fontWeight={600}>
            WorkSpace
          </Text>
          <ListItem>
            <StyledFlex>
              <Image src={Dashboard} background={"white"} />
              <StyledLink to="overview">overview</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={Contacts} background={"white"} />
              <StyledLink to="mynumber">My Number</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={Setting} background={"white"} />
              <StyledLink to="member">Member</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={sms} background={"white"} />
              <StyledLink to="blocklist">Block List</StyledLink>
            </StyledFlex>
          </ListItem>
        </List>
        <List spacing={2} bg={"white"}>
          <Text bg={"white"} fontWeight={600}>
            Billing
          </Text>
          <ListItem>
            <StyledFlex>
              <Image src={Dashboard} background={"white"} />
              <StyledLink to="overview">Subscription</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={Contacts} background={"white"} />
              <StyledLink to="mynumber">Payment method</StyledLink>
            </StyledFlex>
          </ListItem>
        </List>
        <List spacing={2} bg={"white"}>
          <Text bg={"white"} fontWeight={600}>
            Application Setting
          </Text>
          <ListItem>
            <StyledFlex>
              <Image src={Dashboard} background={"white"} />
              <StyledLink to="overview">Audio</StyledLink>
            </StyledFlex>
          </ListItem>

          <ListItem>
            <StyledFlex>
              <Image src={Contacts} background={"white"} />
              <StyledLink to="mynumber">Notification</StyledLink>
            </StyledFlex>
          </ListItem>
        </List>
      </SimpleGrid>
    </SimpleGrid>
  );
};

export default SettingSidebar;
