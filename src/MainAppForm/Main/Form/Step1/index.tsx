import StepsLayout from "../StepsLayout";
import FieldInput from "./FieldInput";
import { FieldsProps } from "./interfaces";

const Step1 = ({
  nameInputHasError,
  enteredName,
  nameChangedHandler,
  nameBlurHandler,
  enteredEmail,
  emailInputHasError,
  emailChangedHandler,
  emailBlurHandler,
  enteredPhone,
  phoneChangedHandler,
  phoneBlurHandler,
  phoneInputHasError,
}: FieldsProps) => {
  return (
    <StepsLayout
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <FieldInput
        id={"name"}
        label="Name"
        placeholder="e.g. Stephen King"
        type="text"
        value={enteredName}
        onChange={nameChangedHandler}
        onBlur={nameBlurHandler}
        name="name"
        error={nameInputHasError}
      />
      <FieldInput
        id={"email"}
        label="Email Address"
        placeholder="e.g. stephenking@lorem.com"
        type="email"
        value={enteredEmail}
        onChange={emailChangedHandler}
        onBlur={emailBlurHandler}
        name="email"
        error={emailInputHasError}
      />
      <FieldInput
        id={"phone"}
        label="Phone Number"
        placeholder="e.g. +1 234 567 890"
        type="tel"
        value={enteredPhone}
        onChange={phoneChangedHandler}
        onBlur={phoneBlurHandler}
        name="phone"
        error={phoneInputHasError}
      />
    </StepsLayout>
  );
};

export default Step1;
