import styled, { css } from "styled-components";
interface AlignCenterProps {
  aligncenter: "true" | "false";
}

export const Container = styled.div<AlignCenterProps>`
  padding: 30px 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 90%;
  min-width: 610px;
  background-color: ${({ theme }) => theme.colors.alabaster};
  border-radius: 0 10px 10px 0;

  ${({ aligncenter }) =>
    aligncenter === "true" &&
    css`
      align-items: center;
      justify-content: center;
    `}

  @media (max-width: 991px) {
    min-width: 80%;
    padding: 40px 14px;
    margin: -80px 14px 140px 14px;
    border-radius: 10px;
  }
`;

export const IconWrapper = styled.div`
  margin: 30px auto;
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
