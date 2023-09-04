import styled, { css } from "styled-components";

export interface PeriodProps {
  period: "true" | "false";
}

export interface MoveProps {
  move: "true" | "false";
}

export const PeriodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 16px;
  margin-top: 40px;
  box-shadow: 2px 2px 23px ${({ theme }) => theme.colors.magnolia};
  background-color: ${({ theme }) => theme.colors.magnolia};
`;

export const StyledPeriod = styled.span<PeriodProps>`
  color: ${({ theme }) => theme.colors.coolGray};
  font-weight: 500;

  ${({ period }) =>
    period === "true" &&
    css`
      color: ${({ theme }) => theme.colors.marineBlue};
    `}
`;

export const BoxIcon = styled.div`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.marineBlue};
  width: 60px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  cursor: pointer;
`;

export const Icon = styled.span<MoveProps>`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  transition: all 0.5s ease-in;
  transform: translateX(${({ move }) => (move === "true" ? "0" : "30px")});
`;
