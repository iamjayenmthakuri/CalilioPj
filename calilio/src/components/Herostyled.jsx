import styled from "styled-components";
import Dashbord from "../components/helpers/dashbord.svg";

export const Section = styled.div`
  display: grid;
  place-items: center;
`;
export const Top = styled.div`
  margin-left: 89px;
  margin-top: 20px;
  gap: -17px;
  width: 280px;
  height: 64px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25),
    inset -1px 0px 0px rgba(0, 0, 0, 0.25);
`;

export const TopMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 5px;
  width: 279px;
`;

export const Title = styled.p`
  font-style: normal;
  width: 147px;
  margin-top: 7px;
  margin-left: 16px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #344054;
  flex: none;
  background: #ffffff;
  ${({ theme }) => theme.activeTitleStyles};
`;

export const TitleSpan = styled(Title)`
  width: 52px;
  height: 20px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-top: 0;
`;

export const CellPhone = styled.img`
  border: 2px solid #ffffff;
  background-color: #ffffff;
  float: right;
  margin-top: 10px;
  margin-right: 16px;
`;

export const Bottom = styled.div`
  width: 280px;
  height: 992px;
  background: #ffffff;
  box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-left: 89px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const Menu = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
  width: 248px;
  height: 166px;
  margin-left: 15px;
  margin-top: 15px;
  background-color: #ffffff;
`;
export const Icons = styled.img`
  background-image: url(${Dashbord});
  width: 20px;
  margin-top: 10px;
  height: 20px;
  background-color: #ffffff;
  ${({ theme }) => theme.activeImageStyles};
`;

export const DashbordSpan = styled(Title)`
  width: 85px;
  height: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #667085;
`;
