import { StyledFooter } from "./styled";

const Footer = () => {
  return (
    <div>
      <StyledFooter>
        Challenge by{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.frontendmentor.io?ref=challenge"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a rel="noreferrer" target="_blank" href="#">
          Natalia Mazur-Żurek
        </a>
        .
      </StyledFooter>
    </div>
  );
};

export default Footer;
