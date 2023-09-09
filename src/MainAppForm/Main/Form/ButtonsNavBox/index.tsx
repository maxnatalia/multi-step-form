import { useStepsContext } from "../../../stepsContext";
import { ButtonsNavBoxProps } from "./interfaces";
import { BackButton, ButtonsBox, NextButton } from "./styled";

const ButtonsNavBox = ({
  handleFormSubmitAndGoToStep5,
  handleFirstStep,
}: ButtonsNavBoxProps) => {
  const { selectedStep, handleNextStep, handlePrevStep } = useStepsContext();
  return (
    <ButtonsBox>
      {selectedStep !== 1 && (
        <BackButton type="button" onClick={handlePrevStep}>
          Go Back
        </BackButton>
      )}
      <NextButton
        type="button"
        step4={selectedStep === 4 ? "true" : "false"}
        onClick={
          selectedStep === 4
            ? handleFormSubmitAndGoToStep5
            : selectedStep === 1
            ? handleFirstStep
            : handleNextStep
        }
      >
        {selectedStep === 4 ? "Confirm" : "Next Step"}
      </NextButton>
    </ButtonsBox>
  );
};

export default ButtonsNavBox;
