import { ErrorMessage, LabelBox } from "./styled";

interface LabelProps {
  fieldName: string;
}

const Label = ({ fieldName }: LabelProps) => {
  return (
    <LabelBox>
      <label>{fieldName}</label>
      {/* {error && <ErrorMessage>This field is requiered</ErrorMessage>} */}
    </LabelBox>
  );
};

export default Label;
