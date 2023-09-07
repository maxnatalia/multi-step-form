import styled from "styled-components";

export const PlanContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
