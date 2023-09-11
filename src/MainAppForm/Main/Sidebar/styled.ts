import styled, { css } from "styled-components";
import bgdesktop from "./bg-sidebar-desktop.svg";
import bgmobile from "./bg-sidebar-mobile.svg";
interface ActiveStepProps {
  activestep: "true" | "false";
}

export const StyledSidebar = styled.aside`
  min-width: 270px;
  border-radius: 10px;
  background-image: url("${bgdesktop}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 991px) {
    background-image: url("${bgmobile}");
    border-radius: 0;
    min-height: 200px;
  }
`;

export const StepsBox = styled.div`
  padding: 20px 0;

  @media (max-width: 991px) {
    padding: 30px 0;
    display: flex;
    justify-content: center;
  }
`;

export const Step = styled.div`
  padding: 14px 40px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.4;

  @media (max-width: 991px) {
    padding: 10px;
  }
`;

export const StepNumber = styled.span<ActiveStepProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};
  font-weight: 700;
  transition: all 2s ease-in-out;

  ${({ activestep }) =>
    activestep === "true" &&
    css`
      background-color: ${({ theme }) => theme.colors.lightBlue};
      color: ${({ theme }) => theme.colors.marineBlue};
      border: 2px solid ${({ theme }) => theme.colors.lightBlue};
    `}
`;

export const StepContent = styled.div`
  text-transform: uppercase;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const StepNumberName = styled.p`
  margin: 0;
`;

export const StepName = styled.p`
  font-weight: 700;
  margin: 0;
`;
