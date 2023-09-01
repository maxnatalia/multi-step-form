import Footer from "./Footer";
import Form from "./Main/Form";
import Main from "./Main";
import Sidebar from "./Main/Sidebar";
import { SelectedStepsProps } from "./interfaces";
import { useSelectedStep } from "./useSelectedStep";

const MainAppForm = () => {
  const {
    selectedStep,
    handleNextStep,
    handlePrevStep,
    handleGoToStep,
  }: SelectedStepsProps = useSelectedStep();

  return (
    <>
      <Main>
        <Sidebar selectedStep={selectedStep} />
        <Form
          selectedStep={selectedStep}
          handleNextStep={handleNextStep}
          handlePrevStep={handlePrevStep}
          handleGoToStep={handleGoToStep}
        />
      </Main>
      <Footer />
    </>
  );
};

export default MainAppForm;
