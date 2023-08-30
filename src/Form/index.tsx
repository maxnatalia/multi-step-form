import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";
import useMultiStepForm, {
  StepsProps,
  PlanProps,
  AddonProps,
} from "../useMultiStepForm";
import { SelectedStepsProps } from "../useSelectedStep";
import { BackButton, Button, ButtonsBox } from "./styled";

interface FormProps extends StepsProps {
  selectedPlan: PlanProps;
  selectedArrayAddons: AddonProps[];
}

const Form = ({
  selectedStep,
  handlePrevStep,
  handleNextStep,
}: SelectedStepsProps) => {
  const {
    selectedArrayAddons,
    selectedPlan,
    handleChooseOffer,
    isMonthly,
    handleChangePeriod,
    field,
    handleFieldChange,
    handleFormSubmit,
    handleClickCheckmark,
    calculateTotal,
  }: FormProps = useMultiStepForm();

  return (
    <form onSubmit={handleFormSubmit}>
      {selectedStep === 1 && (
        <Step1 field={field} handleFieldChange={handleFieldChange} />
      )}
      {selectedStep === 2 && (
        <Step2
          isMonthly={isMonthly}
          selectedPlan={selectedPlan}
          handleChooseOffer={handleChooseOffer}
          handleChangePeriod={handleChangePeriod}
        />
      )}
      {selectedStep === 3 && (
        <Step3
          isMonthly={isMonthly}
          handleClickCheckmark={handleClickCheckmark}
          selectedArrayAddons={selectedArrayAddons}
        />
      )}

      {selectedStep === 4 && (
        <Step4
          isMonthly={isMonthly}
          selectedPlan={selectedPlan}
          selectedArrayAddons={selectedArrayAddons}
          calculateTotal={calculateTotal}
        />
      )}
      <ButtonsBox>
        <BackButton
          type="button"
          disabled={selectedStep === 1}
          onClick={handlePrevStep}
        >
          Go Back
        </BackButton>
        <Button type="button" onClick={handleNextStep}>
          Next Step
        </Button>
      </ButtonsBox>
    </form>
  );
};

export default Form;
