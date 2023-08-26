import { ReactNode } from "react";
import {
  BackButton,
  Button,
  ButtonsBox,
  ChangedContent,
  Container,
  Description,
  Title,
} from "./styled";

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
      <ChangedContent>{children}</ChangedContent>
      <ButtonsBox>
        <BackButton>Go Back</BackButton>
        <Button>Next Step</Button>
      </ButtonsBox>
    </Container>
  );
};

export default StepsLayout;
