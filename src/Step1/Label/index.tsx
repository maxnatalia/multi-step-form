import { ErrorProps, StepsProps } from "../../useMultiStepForm";
import { ErrorMessage, LabelBox } from "./styled";

interface LabelProps {
  fieldName: string;
  inputName: keyof ErrorProps;
  error: ErrorProps;
  userInteracted: boolean | undefined;
}

const Label = ({ fieldName, error, inputName, userInteracted }: LabelProps) => {
  return (
    <LabelBox>
      <label>{fieldName}</label>
      {error[inputName] && userInteracted && (
        <ErrorMessage>This field is requiered</ErrorMessage>
      )}
    </LabelBox>
  );
};

export default Label;
