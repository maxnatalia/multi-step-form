import StepsLayout from "../StepsLayout";
import { StepsProps } from "../useMultiStepForm";
import Label from "./Label";
import { Box, Input } from "./styled";

const Step1 = ({ field, handleFieldChange }: StepsProps) => {
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
        <Label fieldName="Name" />
        <Input
          type="text"
          placeholder="e.g. Stephen King"
          name="name"
          value={field.name}
          onChange={handleFieldChange}
        />
        <Label fieldName="Email Address" />
        <Input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          name="email"
          value={field.email}
          onChange={handleFieldChange}
        />
        <Label fieldName="Phone Number" />
        <Input
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
