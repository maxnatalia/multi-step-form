import styled from "styled-components";

export const SummaryWrapper = styled.div`
  margin-top: 30px;
  padding: 24px 20px;
  background-color: ${({ theme }) => theme.colors.magnolia};
  border-radius: 10px;
  box-shadow: 2px 2px 23px ${({ theme }) => theme.colors.alabaster};
`;

export const PlanBox = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PlanName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.marineBlue};
`;

export const ChangeLink = styled.a`
  color: ${({ theme }) => theme.colors.coolGray};
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    color: ${({ theme }) => theme.colors.purplishBlue};
  }
`;

export const TotalPricePlan = styled.span`
  color: ${({ theme }) => theme.colors.marineBlue};
  font-size: 20px;
  font-weight: 700;
`;

export const AddonsList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

export const AddonsItem = styled.li`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddonsName = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.coolGray};
  font-weight: 300;
`;

export const TotalAddonsPrice = styled.span`
  color: ${({ theme }) => theme.colors.marineBlue};
`;

export const TotalBox = styled.div`
  padding: 24px 20px;
  display: flex;
  justify-content: space-between;
`;
export const Total = styled.span`
  color: ${({ theme }) => theme.colors.coolGray};
`;

export const TotalPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.purplishBlue};
`;
