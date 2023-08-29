import styled, { css } from "styled-components";

interface InputProps {
  error?: boolean;
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
    error &&
    css`
      outline: 1px solid ${({ theme }) => theme.colors.strawberry};
    `}
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
