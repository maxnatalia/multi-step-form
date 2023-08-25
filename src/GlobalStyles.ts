import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        box-sizing: border-box;
    }

        *, ::after, ::before {
            box-sizing: inherit;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.magnolia};
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
