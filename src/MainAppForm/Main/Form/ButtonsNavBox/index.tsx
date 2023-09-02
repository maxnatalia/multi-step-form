import { ButtonsNavBoxProps } from "./interfaces";
import { BackButton, ButtonsBox, NextButton } from "./styled";

const ButtonsNavBox = ({
  selectedStep,
  handlePrevStep,
  formIsValid,
  handleFormSubmitAndGoToStep5,
  handleNextStep,
}: ButtonsNavBoxProps) => {
  return (
    <ButtonsBox>
      {selectedStep !== 1 && (
        <BackButton type="button" onClick={handlePrevStep}>
          Go Back
        </BackButton>
      )}
      <NextButton
        disabled={!formIsValid}
        type="button"
        isStep4={selectedStep === 4}
        onClick={
          selectedStep === 4 ? handleFormSubmitAndGoToStep5 : handleNextStep
        }
      >
        {selectedStep === 4 ? "Confirm" : "Next Step"}
      </NextButton>
    </ButtonsBox>
  );
};

export default ButtonsNavBox;
