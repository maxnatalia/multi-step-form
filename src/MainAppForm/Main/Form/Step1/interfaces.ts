import { ChangeEvent } from "react";

export interface FieldsProps {
  nameInputHasError: boolean;
  enteredName: string;
  nameChangedHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  nameBlurHandler: () => void;
  enteredEmail: string;
  emailInputHasError: boolean;
  emailChangedHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  emailBlurHandler: () => void;
  enteredPhone: string;
  phoneChangedHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  phoneBlurHandler: () => void;
  phoneInputHasError: boolean;
}
