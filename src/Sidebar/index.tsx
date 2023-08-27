import { stepsData } from "./stepsData";
import {
  Step,
  StepContent,
  StepName,
  StepNumber,
  StepNumberName,
  StepsBox,
  StyledSidebar,
} from "./styled";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StepsBox>
        {stepsData.map(({ number, content, name }) => (
          <Step key={number}>
            <StepNumber>{number}</StepNumber>
            <StepContent>
              <StepNumberName>{content}</StepNumberName>
              <StepName>{name}</StepName>
            </StepContent>
          </Step>
        ))}
      </StepsBox>
    </StyledSidebar>
  );
};

export default Sidebar;
