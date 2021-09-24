const maxWidth = (number) => {
  return `only screen and (max-width: ${number}px)`;
};

const theme = {
  colors: {
    blue: `#28b0c9`,
    green: "limegreen",
    yellow: "#bedb95",
  },
  mediaQueries: {
    below700: maxWidth(700),
  },
};

export default theme;
