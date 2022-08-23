import { theme as baseTheme, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme(
  baseTheme,
  {
    colors: {
      primary: {
        700: "#473535",
        500: "#876C57",
        200: "#ECE3D4",
      },
      secondary: {
        700: "#5096EB",
        500: "#82C1ED",
      },
    },
    font: {
      h2500: '500 2rem "Lexend", sans-serif',
      h15500: '500 1.5rem "Lexend", sans-serif',
      h1500: '500 1rem "Lexend", sans-serif',
      b1500: '500 1em "Inter", sans-serif',
      b1400: '400 1em "Inter", sans-serif',
    },
  },
  {
    styles: {
      global: {
        body: {
          font: "font.b1400",
          color: "gray.800",
        },
        "h1, h2, h3, h4, h5, h6": {
          font: "font.h2500",
        },
        button: {
          cursor: "pointer",
        },
      },
    },
  }
);
