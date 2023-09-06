import StepsLayout from "../StepsLayout";
import { ReactComponent as Icon } from "./icon-thank-you.svg";
import { Content } from "./styled";

const Step5 = () => {
  return (
    <StepsLayout
      title="Thank you!"
      description=""
      icon={<Icon />}
      aligncenter={"true"}
    >
      <Content>
        Thanks for confirming your subscription! We hope you have fun using our
        support@loremgaming.com. If you ever need support, please feel free to
        email us at support@loremgaming.com.
      </Content>
    </StepsLayout>
  );
};

export default Step5;
