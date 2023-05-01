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

const StyledText = styled(Text)`
  background-color: white;
`;
const StyledImage = styled(Image)``;

const StyledFlex = styled(Flex)`
  align-items: center;
  gap: 10px;
  background-color: #ba0c0c;

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
      borderRadius={"8px"}
      gap={7}
      padding={2}
    >
      <Flex margin={15} bg={"white"} gap={2} alignItems={"center"}>
        <StyledText>Settings</StyledText>
        <StyledImage src={Setting} bg={"white"} />
      </Flex>
      <Flex flexDirection={"column"} gap={3} backgroundColor={"white"}>
        <StyledText>User Settings</StyledText>
        <Button>My Account</Button>
      </Flex>
      <List>
        <StyledText>WorkSpace</StyledText>
        <ListItem>
          <StyledFlex>
            <Image src={Dashboard} background={"white"} />
            <StyledLink to="overview">overview</StyledLink>
          </StyledFlex>
        </ListItem>

        <ListItem>
          <StyledFlex>
            <Image src={Contacts} background={"white"} />
            <StyledLink to="/contact">My Number</StyledLink>
          </StyledFlex>
        </ListItem>

        <ListItem>
          <StyledFlex>
            <Image src={Setting} background={"white"} />
            <StyledLink to="/setting">Member</StyledLink>
          </StyledFlex>
        </ListItem>

        <ListItem>
          <StyledFlex>
            <Image src={sms} background={"white"} />
            <StyledLink to="/bulksms">Block List</StyledLink>
          </StyledFlex>
        </ListItem>
      </List>
    </SimpleGrid>
  );
};

export default SettingSidebar;
