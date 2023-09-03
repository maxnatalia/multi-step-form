import { ChangeEventHandler, FocusEventHandler } from "react";

export interface FieldInputProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  name: string;
  error: boolean;
}
