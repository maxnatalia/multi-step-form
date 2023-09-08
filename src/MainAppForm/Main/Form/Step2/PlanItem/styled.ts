import styled, { css } from "styled-components";

export interface PlanProps {
  clicked?: string;
}

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

  @media (max-width: 991px) {
    width: 100%;
    flex-direction: row;
    gap: 20px;
  }
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
