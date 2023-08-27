import styled from "styled-components";
import bgdesktop from "./bg-sidebar-desktop.svg";

export const StyledSidebar = styled.aside`
  min-width: 270px;
  border-radius: 10px;
  background-image: url("${bgdesktop}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const StepsBox = styled.div`
  padding: 20px 0;
`;

export const Step = styled.div`
  padding: 14px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.4;
`;

export const StepNumber = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;

export const StepContent = styled.div`
  text-transform: uppercase;
`;

export const StepNumberName = styled.p`
  margin: 0;
`;

export const StepName = styled.p`
  font-weight: 700;
  margin: 0;
`;
