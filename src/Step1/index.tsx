import StepsLayout from "../StepsLayout";
import { ErrorProps, StepsProps } from "../useMultiStepForm";
import Label from "./Label";
import { Box, Input } from "./styled";
interface Step1Props extends StepsProps {
  error: ErrorProps;
}

const Step1 = ({
  field,
  handleFieldChange,
  error,
  userInteracted,
}: Step1Props) => {
  if (!field) {
    field = {
      name: "",
      email: "",
      phone: "",
    };
  }

  return (
    <StepsLayout
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <Box>
        <Label
          fieldName="Name"
          error={error}
          inputName="name"
          userInteracted={userInteracted}
        />
        <Input
          error={error.name ? "true" : "false"}
          type="text"
          placeholder="e.g. Stephen King"
          name="name"
          value={field.name}
          onChange={handleFieldChange}
        />
        <Label
          fieldName="Email Address"
          error={error}
          inputName="email"
          userInteracted={userInteracted}
        />
        <Input
          error={error.email ? "true" : "false"}
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          name="email"
          value={field.email}
          onChange={handleFieldChange}
        />
        <Label
          fieldName="Phone Number"
          error={error}
          inputName="phone"
          userInteracted={userInteracted}
        />
        <Input
          error={error.phone ? "true" : "false"}
          type="tel"
          placeholder="e.g. +1 234 567 890"
          name="phone"
          value={field.phone}
          onChange={handleFieldChange}
        />
      </Box>
    </StepsLayout>
  );
};

export default Step1;
