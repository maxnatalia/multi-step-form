import { useState, ChangeEvent } from "react";
import { ValidationFunction } from "./interfaces";

export const useUserFields = (validateValue: ValidationFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    setIsTouched,
  };
};
