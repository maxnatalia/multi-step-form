import styled from "styled-components";

export const LabelBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.strawberry};
  font-weight: 700;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.marineBlue};
  font-weight: 500;
`;
