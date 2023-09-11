import { StepsProvider } from "./stepsContext";
import Main from "./Main";
import Sidebar from "./Main/Sidebar";
import Form from "./Main/Form";
import Footer from "./Footer";

const MainAppForm = () => {
  return (
    <StepsProvider>
      <Main>
        <Sidebar />
        <Form />
      </Main>
      <Footer />
    </StepsProvider>
  );
};

export default MainAppForm;
