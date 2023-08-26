import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 23px ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.alabaster};
  max-width: 975px;
  height: 600px;
  display: flex;
`;
