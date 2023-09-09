import { useContext, useState, createContext, ReactNode } from "react";
import { SelectedStepsProps } from "./interfaces";

interface StepContextProps {
  children: ReactNode;
}
const StepsContext = createContext<SelectedStepsProps>({
  selectedStep: 1,
  handleNextStep: () => {},
  handlePrevStep: () => {},
  handleGoToStep: () => {},
});

export const useStepsContext = () => useContext(StepsContext);

export const StepsProvider = ({ children }: StepContextProps) => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const handleNextStep = () => {
    setSelectedStep(currElement => currElement + 1);
  };

  const handlePrevStep = () => {
    setSelectedStep(currElement => currElement - 1);
  };

  const handleGoToStep = (stepNumber: number) => {
    setSelectedStep(stepNumber);
  };

  return (
    <StepsContext.Provider
      value={{ selectedStep, handleNextStep, handleGoToStep, handlePrevStep }}
    >
      {children}
    </StepsContext.Provider>
  );
};
