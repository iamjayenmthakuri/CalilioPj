import Phone from "../components/helpers/phone.svg";
import {
  Top,
  TopMain,
  Title,
  TitleSpan,
  CellPhone,
  Section,
  Menu,
  Bottom,
  Icons,
  DashbordSpan,
  // Img,
} from "./Herostyled";

const Hero = () => {
  return (
    <Section>
      <Top>
        <TopMain>
          <Title>Oregon Region</Title>
          <CellPhone src={Phone} />
        </TopMain>

        <TitleSpan
          theme={{
            activeProfileStyles: "margin-left: 16px ",
          }}
        >
          $114.45
        </TitleSpan>
      </Top>
      <Bottom>
        <Menu>
          <Icons></Icons>
          <DashbordSpan
            theme={{
              activeProfileStyles: "margin-left: 16px ",
            }}
          >
            Dashbord
          </DashbordSpan>
        </Menu>
      </Bottom>
    </Section>
  );
};

export default Hero;
