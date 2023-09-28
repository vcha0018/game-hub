import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    white: "#eceeef",
    alphas: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d",
    },
    gray: {
      50: "#f2f2f2",
      100: "#d9d9d9",
      200: "#bfbfbf",
      300: "#a6a6a6",
      400: "#8c8c8c",
      500: "#737373",
      600: "#595959",
      700: "#404040",
      800: "#262626",
      900: "#0d0d0d",
    },
    // gray: {
    //   50: "#f9f9f9",
    //   100: "#ededed",
    //   200: "#d3d3d3",
    //   300: "#b3b3b3",
    //   400: "#a0a0a0",
    //   500: "#898989",
    //   600: "#6c6c6c",
    //   700: "#202020",
    //   800: "#121212",
    //   900: "#111",
    // },
  },
});

export default theme;
