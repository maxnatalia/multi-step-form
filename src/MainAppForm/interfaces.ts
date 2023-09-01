export interface SelectedStepsProps {
  selectedStep: number;
  handleNextStep?: () => void;
  handlePrevStep?: () => void;
  handleGoToStep?: (stepNumber: number) => void;
}
