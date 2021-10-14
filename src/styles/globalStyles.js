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
    /* cursor: url(https://cdn.custom-cursor.com/db/cursor/32/rick_and_morty_rick_sanchez_laser_gun_cursor.png) , default!important; */
    font-family:Calligraphr;
    box-sizing: inherit;
}
img{
    max-width:100%;
    max-height:100%;
}
body{
    background:#32cd323d;
    min-height: 100vh;
    position:relative;
}
`;

export default GolbalStyles;
