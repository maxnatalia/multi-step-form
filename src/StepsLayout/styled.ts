import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.marineBlue};
`;

export const Description = styled.p`
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.coolGray};
`;

export const ChangedContent = styled.div`
  flex: 1;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 16px 20px;
  font-weight: 500;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.alabaster};
  background-color: ${({ theme }) => theme.colors.marineBlue};
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    filter: brightness(130%);
  }
`;

export const BackButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.coolGray};

  &:hover {
    filter: brightness(0);
    color: ${({ theme }) => theme.colors.marineBlue};
  }
`;
