import styled from "styled-components";
import { AddIcon } from "@chakra-ui/icons";

import lg from "../components/helpers/lg.svg";

const ActiveProfile = styled.div`
  position: relative;
  background: #d6d9ff;
  border-radius: 50%;
  outline: solid 2px #ffffff;
  border: 3px solid #5964ff;
  width: 45px;
  height: 45px;
  top: 6px;

  ${({ theme }) => theme.activeProfileStyles};
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 0px;
  gap: 16px;
  position: absolute;
  width: 50px;
  height: 500px;
  left: 26px;
  top: 6px;
  background: #5964ff;
  margin-top: -48px;
`;

const Logo = styled.div`
  background-image: url(${lg});
  width: 40px;
  height: 32.3px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const MainTitle = styled.p`
  position: absolute;
  width: 30px;
  height: 14px;
  left: calc(50% - 30px / 2);
  top: calc(50% - 23px / 2);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #475467;
  background: #d6d9ff;
`;

const ProfileA = styled(ActiveProfile)`
  outline: none;
  border: none;
`;

const ProfileB = styled(ActiveProfile)`
  outline: none;
  border: none;
`;

const AddProfile = styled(ActiveProfile)`
  outline: none;
  border: none;
`;
const AddIconStyled = styled(AddIcon)`
  margin-left: 13px;
  margin-top: 15px;
  font-size: 17px;
  background: #d6d9ff;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo></Logo>
      <ActiveProfile>
        <MainTitle>OR</MainTitle>
      </ActiveProfile>
      <ProfileA
        theme={{
          activeProfileStyles: "margin-top: 20px; margin-bottom: 20px;",
        }}
      >
        <MainTitle>BR</MainTitle>
      </ProfileA>
      <ProfileB theme={{ activeProfileStyles: "margin-bottom: 20px;" }}>
        <MainTitle>CR</MainTitle>
      </ProfileB>
      <AddProfile>
        <AddIconStyled size={20} color="#5964ff;" />
      </AddProfile>
    </SidebarContainer>
  );
};

export default Sidebar;
