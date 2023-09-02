import styled from "styled-components";

interface BackgroundType {
  isStep4: boolean;
}

export const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 16px 24px;
  min-width: 132px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover:not(:disabled) {
    filter: brightness(150%);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.coolGray};
  }
`;

export const NextButton = styled(Button)<BackgroundType>`
  color: ${({ theme }) => theme.colors.alabaster};
  background-color: ${({ theme, isStep4 }) =>
    isStep4 ? theme.colors.purplishBlue : theme.colors.marineBlue};
  margin-left: auto;
`;

export const BackButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.coolGray};

  &:hover {
    filter: brightness(0);
    color: ${({ theme }) => theme.colors.marineBlue};
  }
`;
