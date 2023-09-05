import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 23px ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.alabaster};
  height: 600px;
  max-width: 1200px;
  display: flex;

  @media (max-width: 991px) {
    padding: 0;
    flex-direction: column;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.magnolia};
  }
`;
