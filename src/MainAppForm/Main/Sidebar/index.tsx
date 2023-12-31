import { useStepsContext } from "../../stepsContext";
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
  const { selectedStep } = useStepsContext();

  return (
    <StyledSidebar>
      <StepsBox>
        {stepsData.map(({ number, content, name }) => (
          <Step key={number}>
            <StepNumber
              activestep={
                selectedStep === +number ||
                (selectedStep === 5 && +number === 4)
                  ? "true"
                  : "false"
              }
            >
              {number}
            </StepNumber>
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
