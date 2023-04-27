import styled from "styled-components";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 0px 0px;
  gap: 20px;
  position: absolute;
  width: 50px;
  height: 400px;
  left: 26px;
  top: 0px;
  background: #5964ff;
  margin-top: -8px;
`;

const ActiveProfile = styled.div`
  position: relative;
  background: #d6d9ff;
  border-radius: 50%;
  outline: solid 2px #ffffff;
  border: 3px solid #5964ff;
  width: 45px;
  height: 45px;
  top: 26px;

  ${({ theme }) => theme.activeProfileStyles};
`;

const MainTitle = styled.p`
  position: absolute;
  width: 40px;
  height: 24px;
  left: calc(50% - 40px / 2);
  top: calc(50% - 53px / 2);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #475467;
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

const AddIcon = styled.span`
  position: absolute;
  font-size: 39px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #5964ff;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
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
        <AddIcon>+</AddIcon>
      </AddProfile>
    </SidebarContainer>
  );
};

export default Sidebar;
