import { useState } from "react";

export const useSelectedStep = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const handleNextStep = () => {
    setSelectedStep(currElement => currElement + 1);
  };

  const handlePrevStep = () => {
    setSelectedStep(currElement => currElement - 1);
  };

  const handleGoToStep = (stepNumber: number) => {
    setSelectedStep(stepNumber);
  };

  return { selectedStep, handleNextStep, handlePrevStep, handleGoToStep };
};
