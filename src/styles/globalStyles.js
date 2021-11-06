import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import getSchwifty from "../assets/fonts/get_schwifty.ttf";
import Calligraphr from "../assets/fonts/Roiland-Sans.ttf";
const GolbalStyles = createGlobalStyle`
${normalize}
@font-face {
  font-family: 'Get Schwifty';
  src: url('${getSchwifty}') format('woff2'),
       url('${getSchwifty}') format('woff'),
       url('${getSchwifty}') format('truetype');
}
@font-face {
  font-family: 'Calligraphr';
  src: url('${Calligraphr}') format('woff2'),
       url('${Calligraphr}') format('woff'),
       url('${Calligraphr}') format('truetype');
}
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

button{
    cursor:pointer;
}
 
`;

export default GolbalStyles;
