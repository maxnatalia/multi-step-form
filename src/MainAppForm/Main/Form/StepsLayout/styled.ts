import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  height: 90%;
  min-width: 610px;
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
