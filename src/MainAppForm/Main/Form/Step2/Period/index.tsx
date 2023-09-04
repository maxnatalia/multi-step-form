import { StepsProps } from "../../interfaces";
import { BoxIcon, Icon, PeriodContainer, StyledPeriod } from "./styled";

const Period = ({ isMonthly, handleChangePeriod }: StepsProps) => {
  return (
    <PeriodContainer>
      <StyledPeriod period={isMonthly ? "true" : "false"}>Monthly</StyledPeriod>
      <BoxIcon onClick={handleChangePeriod}>
        <Icon move={!isMonthly ? "false" : "true"} />
      </BoxIcon>
      <StyledPeriod period={!isMonthly ? "true" : "false"}>Yearly</StyledPeriod>
    </PeriodContainer>
  );
};

export default Period;
