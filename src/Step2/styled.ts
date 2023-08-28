import styled, { css } from "styled-components";

export interface PlanProps {
  clicked?: string;
}

export interface PeriodProps {
  period: "true" | "false";
}

export interface MoveProps {
  move: "true" | "false";
}

export const PlanContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Plan = styled.div<PlanProps>`
  width: 150px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: 2px 2px 23px ${({ theme }) => theme.colors.magnolia};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purplishBlue};
  }

  ${({ clicked }) =>
    clicked &&
    css`
      background-color: ${({ theme }) => theme.colors.magnolia};
      border: 1px solid ${({ theme }) => theme.colors.purplishBlue};
    `}
`;

export const Name = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.marineBlue};
`;

export const Price = styled.p`
  margin: 8px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.coolGray};
`;

export const Free = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.marineBlue};
`;

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

export const Period = styled.span<PeriodProps>`
  color: ${({ theme }) => theme.colors.coolGray};
  font-weight: 500;

  ${({ period }) =>
    period === "true" &&
    css`
      color: ${({ theme }) => theme.colors.marineBlue};
    `}
`;

export const BoxIcon = styled.div<MoveProps>`
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.coolGray};
  width: 50px;
  height: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  ${({ move }) =>
    move === "true" &&
    css`
      justify-content: flex-end;
    `}
`;

export const Icon = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.marineBlue};
  border-radius: 50%;
`;
