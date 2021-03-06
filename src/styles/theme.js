const maxWidth = (number) => {
  return `only screen and (max-width: ${number}px)`;
};

const theme = {
  colors: {
    blue: `#28b0c9`,
    green: "limegreen",
    yellow: "#bedb95",
    red: "#e73f40",
  },
  mediaQueries: {
    below850: maxWidth(850),
    below700: maxWidth(700),
    below550: maxWidth(550),
    below400: maxWidth(400),
  },
};

export default theme;
