import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      700: "#473535",
      500: "#876C57",
      200: "#ECE3D4",
    },
    secondary: {
      700: "#5096EB",
      70095: "#5096EB95",
      500: "#82C1ED",
    },
    gray: {
      50: "#D9D9D9",
    },
  },
  fonts: {
    heading: "Lexend",
    body: "Inter",
  },
  fontSizes: {
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.900",
        fontWeight: "400",
        fontSize: "md",
      },
      button: { cursor: "pointer" },
    },
  },
});
