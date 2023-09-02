import { StepsLayoutProps } from "./interfaces";
import { Container, Description, Title } from "./styled";

const StepsLayout = ({ title, description, children }: StepsLayoutProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div>{children}</div>
    </Container>
  );
};

export default StepsLayout;
