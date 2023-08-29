import { ReactNode } from "react";
import { Container, Description, Title } from "./styled";
interface StepsLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

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
