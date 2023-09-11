import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { isNotEmpty, isEmail, isPhone } from "../../../utils/helpers";
import { FormProps, UserFieldsProps } from "./interfaces";
import { useStepsContext } from "../../stepsContext";
import { useMultiStepForm } from "./useMultiStepForm";
import { useUserFields } from "./useUserFields";
import ButtonsNavBox from "./ButtonsNavBox";

const Form = () => {
  const { selectedStep, handleNextStep, handleGoToStep } = useStepsContext();

  const {
    selectedArrayAddons,
    selectedPlan,
    handleChooseOffer,
    isMonthly,
    handleChangePeriod,
    handleClickCheckmark,
    calculateTotal,
  }: FormProps = useMultiStepForm();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    setIsTouched: setIsNameTouched,
  }: UserFieldsProps = useUserFields(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    setIsTouched: setIsEmailTouched,
  }: UserFieldsProps = useUserFields(isEmail);

  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangedHandler,
    inputBlurHandler: phoneBlurHandler,
    setIsTouched: setIsPhoneTouched,
  }: UserFieldsProps = useUserFields(isPhone);

  if (handleGoToStep === undefined || handleNextStep === undefined) {
    return null;
  }

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPhoneIsValid) {
    formIsValid = true;
  }

  const handleFirstStep = () => {
    if (!formIsValid) {
      setIsNameTouched(true);
      setIsEmailTouched(true);
      setIsPhoneTouched(true);
    } else {
      handleNextStep();
    }
  };

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
  };

  const handleFormSubmitAndGoToStep5 = (e: React.FormEvent) => {
    submitFormHandler(e);
    handleGoToStep(5);
  };

  return (
    <form onSubmit={submitFormHandler}>
      {selectedStep === 1 && (
        <Step1
          enteredName={enteredName}
          nameInputHasError={nameInputHasError}
          nameChangedHandler={nameChangedHandler}
          nameBlurHandler={nameBlurHandler}
          enteredEmail={enteredEmail}
          emailInputHasError={emailInputHasError}
          emailChangedHandler={emailChangedHandler}
          emailBlurHandler={emailBlurHandler}
          enteredPhone={enteredPhone}
          phoneChangedHandler={phoneChangedHandler}
          phoneBlurHandler={phoneBlurHandler}
          phoneInputHasError={phoneInputHasError}
        />
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
      {selectedStep === 5 && <Step5 />}
      {selectedStep !== 5 && (
        <ButtonsNavBox
          handleFormSubmitAndGoToStep5={handleFormSubmitAndGoToStep5}
          handleFirstStep={handleFirstStep}
        />
      )}
    </form>
  );
};

export default Form;
