import { StepsLayoutProps } from "./interfaces";
import { Container, Description, IconWrapper, Title } from "./styled";

const StepsLayout = ({
  icon,
  title,
  description,
  children,
  aligncenter,
}: StepsLayoutProps) => {
  return (
    <Container aligncenter={aligncenter ? "true" : "false"}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div>{children}</div>
    </Container>
  );
};

export default StepsLayout;
