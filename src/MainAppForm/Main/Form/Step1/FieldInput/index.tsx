import { FieldInputProps } from "./interfaces";
import { ErrorMessage, Input, Label, LabelBox } from "./styled";

const FieldInput = ({
  id,
  label,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  name,
  error,
}: FieldInputProps) => {
  return (
    <>
      <LabelBox>
        <Label htmlFor={id}>{label}</Label>
        {error && <ErrorMessage>This field is requiered</ErrorMessage>}
      </LabelBox>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
    </>
  );
};

export default FieldInput;
