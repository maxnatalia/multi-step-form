import { useState } from "react";

export interface SelectedStepsProps {
  selectedStep: number;
  handleNextStep?: () => void;
  handlePrevStep?: () => void;
  handleGoToStep?: (stepNumber: number) => void;
}

const useSelectedStep = () => {
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

export default useSelectedStep;
