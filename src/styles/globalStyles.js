import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GolbalStyles = createGlobalStyle`
${normalize}
html {
    box-sizing: border-box;
}
*,
*:before,
*:after {
    font-family:Calligraphr;
    box-sizing: inherit;
}
body{
    min-height: 100vh;
}
`;

export default GolbalStyles;
