import { FormEvent } from "react";
import { SelectedStepsProps } from "../../../interfaces";

export interface ButtonsNavBoxProps extends SelectedStepsProps {
  handleFormSubmitAndGoToStep5: (e: React.FormEvent) => void;
  formIsValid: boolean;
}
