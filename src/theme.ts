import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { GlobalStyles, mode } from "@chakra-ui/theme-tools";

const colors = {
  transparent: "transparent",
  black: "#000",
  white: "#f2f2f2",
  brand: {
    main: "#384284",
    lightShade: "#e5ebe9",
    darkShade: "#1A202C",
    lightAccent: "#68aac8",
    darkAccent: "#6673a6",
  },
};

const styles = {
  global: (props) => ({
    body: {
      color: mode(colors.black, colors.white)(props),
      bgColor: mode(colors.brand.lightShade, colors.brand.darkShade)(props),
    },
  }),
} as GlobalStyles;

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export default extendTheme({
  config,
  colors,
  styles,
});
