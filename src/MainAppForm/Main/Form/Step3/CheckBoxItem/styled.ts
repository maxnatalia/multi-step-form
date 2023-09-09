import styled, { css } from "styled-components";

interface BorderProps {
  checkedborder: "true" | "false";
}

interface MarkedProps {
  marked: "true" | "false";
}

export const Box = styled.div<BorderProps>`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-color: aliceblue;
  border-radius: 10px;
  border: 2px solid transparent;

  ${({ checkedborder }) =>
    checkedborder === "true" &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.purplishBlue};
    `}

  @media (max-width: 991px) {
    gap: 0;
    padding: 14px;
  }
`;

export const CheckmarkWrapper = styled.div<MarkedProps>`
  width: 24px;
  height: 24px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ marked }) =>
    marked === "true" &&
    css`
      background-color: ${({ theme }) => theme.colors.purplishBlue};
    `}

  @media (max-width: 991px) {
    margin-right: 14px;
  }
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.marineBlue};
  margin: 0;

  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin: 6px 0 0 0;
  color: ${({ theme }) => theme.colors.coolGray};

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;

export const Price = styled.p`
  margin-left: auto;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.purplishBlue};

  @media (max-width: 991px) {
    font-size: 14px;
  }
`;
