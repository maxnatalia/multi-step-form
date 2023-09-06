import styled from "styled-components";

export const Content = styled.p`
  max-width: 490px;
  padding: 0 22px;
  margin-bottom: 0;
  text-align: center;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.colors.coolGray};

  @media (max-width: 991px) {
    padding: 0 10px;
  }
`;
