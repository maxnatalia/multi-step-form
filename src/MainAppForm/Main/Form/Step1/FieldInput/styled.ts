import styled, { css } from "styled-components";

interface InputProps {
  error?: "true" | "false";
}

export const Input = styled.input<InputProps>`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: 2px 2px 23px ${({ theme }) => theme.colors.magnolia};
  font-weight: 700;

  &::placeholder {
    color: ${({ theme }) => theme.colors.coolGray};
    font-weight: 300;
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.purplishBlue};
  }

  ${({ error }) =>
    error === "true" &&
    css`
      outline: 1px solid ${({ theme }) => theme.colors.strawberry};
    `}
`;

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
